import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Phones / tablets: coarse pointer with no hover. Used to drop desktop-only
// behaviours (pinned horizontal scrub, touch-hijacking normalizeScroll).
const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

const ease = 'power3.out';

function initSmoother() {
  if (reduced) return null;
  if (!document.getElementById('smooth-wrapper')) return null;
  return ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.15,
    effects: true,
    // normalizeScroll intercepts touch globally, which breaks nested native
    // scrollers (the projects rail) and feels sticky on iOS. Keep it for the
    // desktop pinned scrub only.
    normalizeScroll: !isTouch,
  });
}

function heroTitle() {
  const title = document.querySelector<HTMLElement>('[data-hero-title]');
  if (!title) return;
  if (reduced) return;
  const split = new SplitText(title, { type: 'lines,chars', mask: 'lines' });
  gsap.from(split.chars, {
    yPercent: 110,
    duration: 1,
    ease: 'power4.out',
    stagger: 0.02,
    delay: 0.15,
  });
}

function heroExtras() {
  const portrait = document.querySelector('[data-hero-portrait]');
  if (portrait && !reduced) {
    gsap.from(portrait, { scale: 1.08, opacity: 0, duration: 1.3, ease, delay: 0.3 });
  }
  // parallax on the hero gradient
  const grad = document.querySelector('[data-hero-grad]');
  if (grad && !reduced) {
    gsap.to(grad, {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });
  }
}

function reveals() {
  const items = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  items.forEach((el) => {
    if (reduced) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }
    gsap.from(el, {
      y: 34,
      opacity: 0,
      duration: 0.9,
      ease,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });
}

function horizontalProjects() {
  const section = document.querySelector<HTMLElement>('[data-h-scroll]');
  const track = document.querySelector<HTMLElement>('[data-h-track]');
  if (!section || !track) return;

  // Fall back to a native swipeable rail when motion is reduced or on touch
  // devices. normalizeScroll is now disabled on touch (see initSmoother), so
  // the nested overflow scroll receives swipes directly — far better than a
  // pinned scrub that forces ~10 vertical swipes and clips cards on short
  // viewports.
  if (reduced || isTouch) {
    section.classList.add('native');
    return;
  }

  const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

  gsap.to(track, {
    x: () => -distance(),
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => '+=' + distance(),
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}

// Hover 3D: tilt the folder in 3D based on the pointer position over the card.
function hover3d() {
  if (reduced) return;
  const cards = gsap.utils.toArray<HTMLElement>('.hover-3d');
  const MAX = 15; // max tilt in degrees
  cards.forEach((card) => {
    const tilt = card.querySelector<HTMLElement>('[data-tilt]') || card;
    gsap.set(tilt, { transformPerspective: 900 });
    const rotX = gsap.quickTo(tilt, 'rotationX', { duration: 0.5, ease: 'power3.out' });
    const rotY = gsap.quickTo(tilt, 'rotationY', { duration: 0.5, ease: 'power3.out' });

    card.addEventListener('mouseenter', () => {
      gsap.to(tilt, { scale: 1.05, z: 10, duration: 0.45, ease: 'power3.out' });
    });
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5; // -0.5 … 0.5
      const py = (e.clientY - r.top) / r.height - 0.5;
      rotY(px * MAX * 2);
      rotX(-py * MAX * 2);
    });
    card.addEventListener('mouseleave', () => {
      rotX(0);
      rotY(0);
      gsap.to(tilt, { scale: 1, z: 0, duration: 0.6, ease: 'power3.out' });
    });
  });
}

function marquee() {
  if (reduced) return;
  const tracks = gsap.utils.toArray<HTMLElement>('[data-marquee-track]');
  if (!tracks.length) return;
  tracks.forEach((track) => {
    gsap.to(track, {
      xPercent: -100,
      repeat: -1,
      duration: 28,
      ease: 'none',
    });
  });
}

function counts() {
  const els = gsap.utils.toArray<HTMLElement>('[data-count]');
  els.forEach((el) => {
    const raw = el.dataset.count || el.textContent || '';
    const num = parseFloat(raw.replace(/[^\d.]/g, ''));
    if (!num || reduced) return;
    const suffix = raw.replace(/[\d.]/g, '');
    const obj = { v: 0 };
    gsap.to(obj, {
      v: num,
      duration: 1.4,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => { el.textContent = Math.round(obj.v) + suffix; },
    });
  });
}

function anchorScroll(smoother: ScrollSmoother | null) {
  document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]').forEach((a) => {
    const href = a.getAttribute('href') || '';
    const hash = href.includes('#') ? href.slice(href.indexOf('#')) : '';
    if (hash.length < 2) return;
    const isLocal = href.startsWith('#') || href.startsWith('/#') || href.startsWith(location.pathname + '#');
    if (!isLocal) return;
    const target = document.querySelector(hash);
    if (!target) return;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      if (smoother) smoother.scrollTo(target as HTMLElement, true, 'top 64px');
      else (target as HTMLElement).scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
    });
  });
}

function start() {
  const smoother = initSmoother();
  heroTitle();
  heroExtras();
  reveals();
  horizontalProjects();
  hover3d();
  marquee();
  counts();
  anchorScroll(smoother);
  ScrollTrigger.refresh();
}

// Wait for fonts so SplitText measures correctly.
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(start);
} else {
  window.addEventListener('load', start);
}
