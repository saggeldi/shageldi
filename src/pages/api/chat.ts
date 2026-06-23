import type { APIRoute } from 'astro';
import { GoogleGenAI } from '@google/genai';
import { systemPrompt } from '../../data/persona';

// On-demand (server) route — keeps GEMINI_API_KEY off the client.
export const prerender = false;

// Free-tier models tried in order. The lite / 2.0 variants usually have
// far more capacity, so if 2.5-flash is overloaded (503) we fall through
// to one that's available instead of failing.
const MODELS = [
  'gemini-2.5-flash',
  'gemini-2.5-flash-lite',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
];
const MAX_MESSAGES = 24; // cap history to keep latency/cost sane
const MAX_CHARS = 2000; // per-message guard
const TRANSIENT = new Set([429, 500, 503]); // overload / rate-limit codes worth failing over

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.GEMINI_API_KEY ?? process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return json({ error: 'Chat is not configured.' }, 500);
  }

  let messages: ChatMessage[];
  try {
    const body = await request.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return json({ error: 'Invalid request body.' }, 400);
  }

  // Sanitise + clamp the incoming history.
  const contents = messages
    .filter((m) => m && (m.role === 'user' || m.role === 'model') && typeof m.text === 'string')
    .slice(-MAX_MESSAGES)
    .map((m) => ({
      role: m.role,
      parts: [{ text: m.text.slice(0, MAX_CHARS) }],
    }));

  if (!contents.length || contents[contents.length - 1].role !== 'user') {
    return json({ error: 'Send at least one user message.' }, 400);
  }

  const ai = new GoogleGenAI({ apiKey });
  const callGemini = (model: string) =>
    ai.models.generateContentStream({
      model,
      contents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.6,
        maxOutputTokens: 1024,
      },
    });

  // Walk the model list: on a transient overload (503 "high demand", 429, 500)
  // fail over to the next, usually-more-available model. Any other error stops.
  let geminiStream;
  let lastErr: unknown;
  for (const model of MODELS) {
    try {
      geminiStream = await callGemini(model);
      break;
    } catch (err) {
      lastErr = err;
      const code = (err as { code?: number })?.code;
      if (code && TRANSIENT.has(code)) {
        console.warn(`Model "${model}" unavailable (${code}); trying next.`);
        continue;
      }
      console.error('Gemini request failed:', err);
      return json({ error: 'Failed to reach the assistant.' }, 502);
    }
  }

  if (!geminiStream) {
    console.error('All Gemini models unavailable:', lastErr);
    return json({ error: 'The assistant is busy right now — please try again in a moment.' }, 503);
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const chunk of geminiStream) {
          const text = chunk.text;
          if (text) controller.enqueue(encoder.encode(text));
        }
      } catch (err) {
        console.error('Gemini stream error:', err);
        controller.enqueue(encoder.encode('\n\n(Sorry — something interrupted my reply.)'));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Accel-Buffering': 'no',
    },
  });
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
