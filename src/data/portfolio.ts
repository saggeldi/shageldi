// Single source of truth for all site content.
// Migrated from the old React portfolio (src/) — data only, redesigned UI.

export const profile = {
  name: 'Shageldi Alyyev',
  shortName: 'Shageldi A.',
  initials: 'SA',
  role: 'Mobile Developer',
  // Hero headline is split so individual words can be animated / italicised.
  headline: ['Mobile', 'developer,', 'shipping', 'ideas.'],
  headlineItalic: 'shipping', // word rendered in italic serif accent
  heroLead:
    'I turn ideas into polished, production-grade apps across Android, Kotlin Multiplatform, and the web — and everything in between.',
  location: 'Ashgabat, Turkmenistan',
  available: 'Available · Mobile & KMP',
  email: 'multiplatform00@gmail.com',
  phone: '+993 61 29 87 82',
  socials: {
    github: 'https://github.com/saggeldi',
    linkedin: 'https://linkedin.com/in/şageldi-alyýew-b4b2331a9',
    instagram: 'https://www.instagram.com/sh.alyyv/',
    telegram: 'https://t.me/kotlin_multiplatform_tm',
  },
  // Editorial about paragraph. `_word_` marks an italic serif accent.
  about:
    'I am a _mobile developer_ based in _Ashgabat, Turkmenistan._ I build robust, scalable applications with _Kotlin,_ _Jetpack Compose_ and _Compose Multiplatform,_ backed by over six years of commercial work shipping production apps to _Google Play,_ the _App Store_ and the web.',
  aboutLong:
    'Results-driven Android Developer with expertise in building robust and scalable mobile applications. Proficient in modern Android development with a strong skill set in Kotlin, Jetpack Compose, Android XML, Coroutines, Ktor, Room, Firebase, Retrofit, WorkManager and Compose Multiplatform. My core expertise spans Android Native Development and Kotlin Multiplatform, complemented by hands-on frontend and backend work using React, NestJS and TypeScript — always with a focus on clean architecture, performance and cross-platform consistency.',
};

export const stats = [
  { value: '20+', label: 'Apps shipped' },
  { value: '6+', label: 'Years experience' },
  { value: '3', label: 'Disciplines' },
];

// Wordmarks for the trusted-by marquee (companies & platforms worked with).
export const clients = [
  'JetBrains',
  'Google GDG',
  'Balary',
  'YTM',
  'Geekspace',
  'UNDP',
  'USAID',
  'Pikir',
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  site: string;
}

export const experience: Experience[] = [
  { title: 'Mobile Developer', company: 'Balary', period: '2024 — 2025', location: 'Ashgabat, Turkmenistan', site: 'https://balary.com.tm' },
  { title: 'Mobile Developer', company: 'YTM', period: '2023 — 2025', location: 'Ashgabat, Turkmenistan', site: 'https://ytm.tm' },
  { title: 'Web Development Mentor', company: 'Bootcamp Turkmenistan', period: '2022 — 2023', location: 'Ashgabat, Turkmenistan', site: 'http://bootcamp.com.tm/' },
  { title: 'Mobile Developer', company: 'Pikir', period: '2021 — 2022', location: 'Ashgabat, Turkmenistan', site: 'https://pikir.biz' },
  { title: 'Full-Stack Developer', company: 'Geekspace Turkmenistan', period: '2020 — 2023', location: 'Ashgabat, Turkmenistan', site: 'https://geekspace.dev' },
];

// Disciplines (the old "Skills" + "Advantages" reframed as services).
export interface Service {
  title: string;
  italic: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    title: 'Native Mobile',
    italic: 'Development',
    description:
      'Production Android apps in Kotlin & Jetpack Compose — clean architecture, offline-first data, real-time tracking, push notifications and buttery performance. From first commit to a published, maintained release.',
    tags: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Room', 'Retrofit', 'Hilt', 'Firebase', 'Material 3'],
  },
  {
    title: 'Cross-Platform &',
    italic: 'KMP',
    description:
      'One shared codebase for Android and iOS with Kotlin Multiplatform & Compose Multiplatform. Native maps, video and platform features bridged through expect/actual — featured in the JetBrains KMP showcase.',
    tags: ['Compose Multiplatform', 'KMP', 'Ktor', 'Koin', 'SQLDelight', 'MapLibre', 'expect/actual'],
  },
  {
    title: 'Web & Backend',
    italic: 'Engineering',
    description:
      'Full-stack web platforms and APIs with React, TypeScript and NestJS on PostgreSQL. Containerised with Docker, searchable with Elasticsearch, shipped through automated CI/CD pipelines.',
    tags: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'TypeORM', 'Elasticsearch', 'Docker'],
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'What kind of projects do you take on?',
    a: 'Native Android apps, Kotlin Multiplatform / Compose Multiplatform products for Android + iOS, and full-stack web platforms. I have shipped e-commerce, logistics, GPS-tracking, marketplace and educational apps end to end.',
  },
  {
    q: 'How do you communicate during a project?',
    a: 'I reply quickly and stay online most of the day, so cooperation stays productive. You always know where the project stands — no silent weeks.',
  },
  {
    q: 'Do you understand the business side?',
    a: 'Yes. I immerse myself in your business model and build the project the way a client wants to see it, not just the way a developer would. Decisions are made with the product goal in mind.',
  },
  {
    q: 'Can you keep the work confidential?',
    a: 'Absolutely. Many projects have unique properties that should not be public until launch — or ever. Privacy and NDAs are respected throughout.',
  },
  {
    q: 'Can you handle backend and infrastructure too?',
    a: 'I build the whole product when needed: NestJS / Express APIs, PostgreSQL databases, Docker, Elasticsearch and CI/CD with GitHub Actions and Bitrise — so the mobile app and its backend stay in sync.',
  },
  {
    q: 'Do you do mentoring or talks?',
    a: 'Yes — I have mentored at Bootcamp Turkmenistan and spoken at GDG DevFest and Google I/O Extended Ashgabat on Android and Kotlin Multiplatform.',
  },
];

export const skills = [
  'Kotlin', 'Java', 'Compose Multiplatform', 'Jetpack Compose', 'TypeScript',
  'React', 'NestJS', 'Express', 'PostgreSQL', 'Ktor', 'Firebase',
  'GitHub Actions', 'Bitrise', 'JUnit', 'Docker', 'Elasticsearch',
];

export interface Certificate {
  title: string;
  description: string;
  image: string;
}

export const certificates: Certificate[] = [
  { title: 'Google I/O Extended Ashgabat 2025 — Speaker', description: 'Speaker on "Android Evolution Unleashed: From AI-Powered Android 16 to Cross-Platform Mastery with Kotlin Multiplatform" at Google I/O Extended Ashgabat, September 2025.', image: '/certificates/Screenshot 2025-10-21 at 01.12.55.png' },
  { title: 'GDG DevFest Ashgabat 2021 — Speaker', description: 'Certificate of appreciation for speaking in the "What\'s New in Android 12" session at DevFest Ashgabat, with Google Developers Group Ashgabat.', image: '/certificates/Screenshot 2025-10-21 at 01.09.53.png' },
  { title: 'Google I/O Extended — Speaker Badge', description: 'Official Speaker badge for Google I/O Extended Ashgabat, recognising contribution to the Android and Kotlin community.', image: '/certificates/Screenshot 2025-10-21 at 01.13.14.png' },
  { title: 'UNDP & GDG — Digital Goal Learning Office', description: 'Certificate of appreciation from the United Nations Development Programme with Google Developers Group for the Digital Goal Learning Office.', image: '/certificates/Screenshot 2025-10-21 at 01.11.30.png' },
  { title: 'USAID Startup Ecosystem Program 2021', description: 'Completion of the USAID Startup Ecosystem Program, focused on entrepreneurship and startup development.', image: '/certificates/Screenshot 2025-10-21 at 01.11.53.png' },
  { title: 'GeekSpace "Startuper 2020"', description: 'Appreciation for outstanding work in the GeekSpace "Startuper 2020" program under SEC initiatives.', image: '/certificates/Screenshot 2025-10-21 at 01.12.14.png' },
  { title: 'Türkmenaragatnaşyk — Diploma II Degree', description: 'Second-degree diploma for telecommunications innovation projects and achievements.', image: '/certificates/Screenshot 2025-10-21 at 01.10.21.png' },
  { title: 'Türkmenaragatnaşyk — Diploma III Degree', description: 'Third-degree diploma for contributions to telecommunications and innovation projects.', image: '/certificates/Screenshot 2025-10-21 at 01.10.44.png' },
  { title: 'Türkmenaragatnaşyk — Innovation Diploma', description: 'Recognition for innovation contributions in telecommunications and technology development.', image: '/certificates/Screenshot 2025-10-21 at 01.11.03.png' },
];

export interface ProjectLink {
  url: string;
  title: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  // Optional square app-icon / logo shown in the detail header (falls back to the cover image).
  logo?: string;
  images: string[];
  links: ProjectLink[];
  tech: string[];
  featured?: boolean;
  // Optional YouTube embed (full youtube.com/embed/… URL) shown inline on the detail page.
  video?: string;
}

// Strip leading emoji + whitespace from the old tech names.
const t = (raw: string[]) =>
  raw.map((s) => s.replace(/^[^\p{L}\p{N}]+/u, '').trim());

export const projects: Project[] = [
  {
    slug: 'yedu-rides',
    name: 'Yedu Rides — Driver App',
    category: 'Mobile · Ride-Hailing',
    featured: true,
    logo: '/images/yedu-rides/logo.png',
    summary: 'Smart request flow, route optimization and a clean earnings dashboard for drivers.',
    description:
      'Smart request flow, route optimization, and a clean earnings dashboard. Go online with one tap, get paid by the trip. Yedu Rides is the driver companion to the Yedu taxi platform, available on Android and iOS.',
    images: [
      '/images/yedu-rides/home.png',
      '/images/yedu-rides/dashboard.png',
      '/images/yedu-rides/pending-order.png',
      '/images/yedu-rides/success.png',
      '/images/yedu-rides/login.png',
      '/images/yedu-rides/splash.png',
    ],
    links: [
      { url: 'https://play.google.com/store/apps/details?id=com.yedu.taxi.driver.android&hl=en-US', title: 'Play Store' },
      { url: 'https://apps.apple.com/tm/app/yedu-rides/id6773292030', title: 'App Store' },
      { url: 'https://yedu.ae', title: 'Website' },
    ],
    tech: [],
    video: 'https://www.youtube.com/embed/0Lp_79x9710',
  },
  {
    slug: 'yedu-taxi',
    name: 'Yedu Taxi — AI Ride-Hailing',
    category: 'Mobile · AI · Ride-Hailing',
    featured: true,
    logo: '/images/yedu-taxi/logo.webp',
    summary: 'Smart taxi platform with AI on board — book by tapping, talking, or sending a photo.',
    description:
      'Yedu is the smart taxi platform with AI on board. Book a ride by tapping, talking, or sending EVA a photo — and let the city come to you. Available on Android and iOS.',
    images: [
      '/images/yedu-taxi/onboarding.png',
      '/images/yedu-taxi/ai-chat.png',
      '/images/yedu-taxi/order.png',
      '/images/yedu-taxi/order-2.png',
      '/images/yedu-taxi/onboarding-2.png',
      '/images/yedu-taxi/splash.png',
    ],
    links: [
      { url: 'https://play.google.com/store/apps/details?id=com.yedu.taxi.android&hl=en-US', title: 'Play Store' },
      { url: 'https://apps.apple.com/tm/app/yedu-taxi/id6774180131', title: 'App Store' },
      { url: 'https://yedu.ae', title: 'Website' },
    ],
    tech: [],
    video: 'https://www.youtube.com/embed/-Bct7841IqY',
  },
  {
    slug: 'campus',
    name: 'Кампус — Расписание занятий',
    category: 'Android · EdTech',
    featured: true,
    logo: 'https://play-lh.googleusercontent.com/OAI-3sCj7rziVvtI3L5Lwv8BYgdAbYPssGk024XuQbGOeuKNO3cGOMqxgz5YFC8w7CgsW3rS0tK3er2H-ScEkw=w240-h480',
    summary: 'The #1 student app — class schedules, social feed, courses, jobs and student deals.',
    description:
      'Кампус — приложение №1 для студентов! У нас все ВУЗы! Легко управляй своей учебной и студенческой жизнью с помощью Кампуса. Мы собрали всё необходимое для комфортного обучения и взаимодействия внутри вуза в одном месте. Основные функции: расписание с актуальными данными о парах и заметками; социальная сеть «Подслушано» для историй, лайков и общения с одногруппниками; курсы и материалы для подготовки к экзаменам; вакансии и подработки с советами по резюме; оценки преподавателей с отзывами; а также эксклюзивные скидки и акции от партнёров специально для студентов.',
    images: [
      'https://play-lh.googleusercontent.com/lflAcWU9QTmz_OHEhLa-T9d77no3Tb33Yz-KJcSyZ1Zd0FWA3g4C5KNTtZkP5Ha6dK8b1vVUZF6e_SU5h80ZFA=w2560-h1440',
      'https://play-lh.googleusercontent.com/_h_aRRg6URJMLYxr4U9ZD00KnAAgfYBcNPNHm6JPMVdHAxbHh1m0JFdzRj7XIx6ZURkIj35kLEXLoPwDmXTDug=w2560-h1440',
      'https://play-lh.googleusercontent.com/wJl1sn5lQXC48ENoGLiJRgO9Yrds13UHzVJJazCv9nIYizy_4qAVJwj6GBpX807wSfUe9GAx_mXjctKM4XEL6Q=w2560-h1440',
      'https://play-lh.googleusercontent.com/LP0-Od7s4w4kYrMqZa6GJcxpjXep2gSsTQBli_Ree4Qbjt2QcfQH3kan5vlcVHOAd2npCHO_WGB-DOp4oqlSgH4=w2560-h1440',
      'https://play-lh.googleusercontent.com/T-TXpwR0Bc2y9EctdZ0mqhaOWubKfKML-uJWOqzmIXelyIkBwr24aypRdf87tRU-GjdNKFhqyswdOeG-c9FV=w2560-h1440',
      'https://play-lh.googleusercontent.com/KXr5jEyaCFNGe745djTADqexYmhU3EcPRkJ-OmStLFOXsU5DU2rs-OgdkGCsgesrdD8cHnvVFU61lpe44PPR=w2560-h1440',
      'https://play-lh.googleusercontent.com/GfNO-Tmi8ayibQFeogRLJ6-iriSBKBVHabj8ys_-lvroolaFzIhcAZA8J8OPNYbXP9YFVWiGFthj9pRQLXWht-I=w2560-h1440',
      'https://play-lh.googleusercontent.com/mXRF_ZyeIaX_4d20din3pz6Ht7PDJ9HPvRNRWdRf4lzRIYQDqRbviHIMj0R7mJd_B26a1SsGkXoDFixJx2njtg=w2560-h1440'
    ],
    links: [
      { url: 'https://play.google.com/store/apps/details?id=ru.dewish.campus&hl=ru', title: 'Play Store' },
    ],
    tech: [],
  },
  {
    slug: 'kiosk',
    name: 'Kiosk — Self-Service Payment Terminal',
    category: 'Full-Stack · KMP',
    featured: true,
    summary: 'Self-service payment kiosk with bill acceptor, touch UI and receipt printing.',
    description:
      'A self-service payment kiosk with an integrated bill acceptor, touch-screen UI and receipt printing. The backend is built with NestJS and PostgreSQL — secure payment integration, transaction logging and robust device-communication APIs. The client runs on Ubuntu via Kotlin & Compose Multiplatform, handling real-time bill validation, check printing and hardware control over serial communication, with a modular architecture built for reliable offline operation.',
    images: [
      '/images/kiosk/pl32100420-windows_xp_or_linux_computer_self_service_kiosk_terminal_with_keyboard.webp',
      '/images/kiosk/Screenshot 2025-11-07 at 00.09.57.png',
      '/images/kiosk/Screenshot 2025-11-07 at 00.10.45.png',
      '/images/kiosk/Screenshot 2025-11-07 at 00.10.58.png',
      '/images/kiosk/Screenshot 2025-11-07 at 00.11.15.png',
      '/images/kiosk/Screenshot 2025-11-07 at 00.12.10.png',
    ],
    links: [],
    tech: t(['🧩 Compose Multiplatform', '🦄 NestJS', '🐘 PostgreSQL', '🐧 Ubuntu', '⚙️ Hardware Integration']),
  },
  {
    slug: 'balary',
    name: 'Balary — Online Supermarket',
    category: 'Kotlin Multiplatform · E-commerce',
    featured: true,
    summary: 'KMP supermarket app featured in the JetBrains Compose Multiplatform showcase.',
    description:
      'Balary online supermarket carries more than 50 categories of goods — seasonal vegetables, fruits, home goods and much more. Save a personal shopping list on the app or website and reuse it on your next order. Crafted with Kotlin & Compose Multiplatform for shared UI across Android and iOS, with native maps, video playback and offline-first caching — featured in the official JetBrains KMP case studies.',
    images: [
      '/images/balary/screen-1.jpg', '/images/balary/screen-2.jpg', '/images/balary/screen-3.jpg',
      '/images/balary/screen-4.jpg', '/images/balary/screen-5.jpg', '/images/balary/screen-6.jpg', '/images/balary/screen-7.jpg',
    ],
    links: [
      { url: 'https://www.jetbrains.com/help/kotlin-multiplatform-dev/case-studies.html', title: 'JetBrains Showcase' },
      { url: 'https://play.google.com/store/apps/details?id=tm.com.balary&hl=en', title: 'Play Store' },
      { url: 'https://apps.apple.com/tm/app/balary/id1482230836', title: 'App Store' },
    ],
    tech: t(['🧩 Compose Multiplatform', '🧬 JNI + FFmpeg', '🗺️ MapLibre + Nominatim', '📦 Room KMP', '▶️ Video Player', '🌐 Ktor Client']),
  },
  {
    slug: 'tex-logistic',
    name: 'Tex Logistic — Freight Made Simple',
    category: 'Android · Logistics',
    featured: true,
    summary: 'Modular Jetpack Compose logistics platform — order to real-time delivery.',
    description:
      'Tex Logistic is a modern, modular logistics platform built with Jetpack Compose. It handles everything from order placement to real-time tracking and delivery confirmation. Designed with clean architecture and fully localized, it is a production-ready freight coordination app built in Kotlin.',
    images: [
      '/images/tex/order.png', '/images/tex/dark.png', '/images/tex/tracking.png',
      '/images/tex/delivery.png', '/images/tex/map.png', '/images/tex/chat.png',
    ],
    links: [
      { url: 'https://play.google.com/store/apps/details?id=com.tex.logistic', title: 'Play Store' },
      { url: 'https://texexpress.pro', title: 'Website' },
    ],
    tech: t(['🧩 Jetpack Compose', '🌐 Ktor Client', '🧪 Koin', '🗺️ Google Maps Compose', '🌍 Lyricist', '🧱 Clean Architecture', '🧪 GitHub Actions']),
  },
  {
    slug: 'tex-driver',
    name: 'Tex Driver — GPS Sender',
    category: 'Android · Background Service',
    featured: true,
    summary: 'Open-source foreground-service GPS sender for the Tex Logistic fleet.',
    description:
      'Tex Driver is the companion GPS-sender app for Tex Logistic. Built for Android, it runs a lightweight foreground service that automatically sends the driver\'s location every 10 seconds or every 10 metres. It is 100% free and open source, built with privacy, configurability and reliability in mind.',
    images: ['/images/tex-driver/1.png', '/images/tex-driver/2.png', '/images/tex-driver/3.png', '/images/tex-driver/4.png', '/images/tex-driver/5.png'],
    links: [
      { url: 'https://play.google.com/store/apps/details?id=org.texlogistic.client', title: 'Play Store' },
      { url: 'https://texexpress.pro', title: 'Website' },
    ],
    tech: t(['📍 Foreground Service', '🌐 Ktor Client', '🔧 Configurable Parameters', '🛡️ Privacy First']),
  },
  {
    slug: 'ytm-gps',
    name: 'YTM GPS — Fleet Tracking',
    category: 'Kotlin Multiplatform · GPS',
    featured: true,
    summary: 'GPS tracking across 2,600 device types — geofencing, fuel & route monitoring.',
    description:
      'YTM offers a GPS-tracking solution that works with 2,600 types of devices: online tracking, data reading, geofencing, fuel monitoring, precise indoor/outdoor location, route recording, red/yellow/green zone marking and direct incident reporting. Built with Compose Multiplatform with shared maps and networking across Android and iOS.',
    images: [
      '/images/ytm/screen-1.jpg', '/images/ytm/screen-2.jpg', '/images/ytm/screen-3.jpg', '/images/ytm/screen-4.jpg',
      '/images/ytm/screen-5.jpg', '/images/ytm/screen-6.jpg', '/images/ytm/screen-7.jpg', '/images/ytm/screen-8.jpg',
    ],
    links: [{ url: 'https://play.google.com/store/apps/details?id=com.gs.wialonlocal.android&hl=en', title: 'Play Store' }],
    tech: t(['🧩 Compose Multiplatform', '🗺️ Google Maps', '📦 Koin', '🧭 Compose Navigation', '🌐 Ktor Client']),
  },
  {
    slug: 'operator',
    name: 'Operator — Call Center Suite',
    category: 'Android · Backend · Web',
    featured: true,
    summary: 'Caller-ID operator suite: Android, courier app, admin panel & PC installer.',
    description:
      'Operator helps service-company call-centre staff: when a customer calls, their full information and history appear instantly on the operator\'s computer. A full ecosystem — Android operator and courier apps, a React admin panel, an Express/PostgreSQL backend and a C# PC installer — with offline/online sync and call screening on Android 10+.',
    images: [
      '/images/operator/operator-1.png', '/images/operator/operator-2.png', '/images/operator/operator-3.png',
      '/images/operator/operator-4.png', '/images/operator/operator-5.png', '/images/operator/operator-6.png', '/images/operator/operator-7.png',
    ],
    links: [
      { url: 'https://github.com/saggeldi/OperatorApp', title: 'Android App' },
      { url: 'https://github.com/saggeldi/OperatorBackend', title: 'Backend' },
      { url: 'https://github.com/saggeldi/operator-admin-front', title: 'Admin Front' },
      { url: 'https://github.com/saggeldi/OperatorCourier', title: 'Courier App' },
      { url: 'https://github.com/saggeldi/Operator-installer', title: 'PC Installer (C#)' },
    ],
    tech: t(['☕ Java & XML', '🗺️ Google Maps', '🗄️ SQLite', '🔗 Retrofit', '🧩 Dagger Hilt', '🔥 Firebase Cloud Messaging', '⚛️ React JS', '🚀 Express JS', '🐘 PostgreSQL', '📞 CallScreeningService']),
  },
  {
    slug: 'yarmarka',
    name: 'Yarmarka TM',
    category: 'Android · Marketplace',
    summary: 'Exclusive handmade gifts marketplace — buy directly from artists.',
    description: 'Gifts for any occasion — each work is exclusive. Buy works directly from the artist. A native Android marketplace built with Java, Retrofit and Firebase.',
    images: ['/images/elishi/screen-1.jpg', '/images/elishi/screen-2.jpg', '/images/elishi/screen-3.jpg', '/images/elishi/screen-4.jpg', '/images/elishi/screen-5.jpg', '/images/elishi/screen-6.jpg', '/images/elishi/screen-7.jpg'],
    links: [{ url: 'https://play.google.com/store/apps/details?id=com.elishi.android&hl=en', title: 'Play Store' }],
    tech: t(['☕ Java & XML', '🔗 Retrofit', '🧩 Dagger Hilt', '🔥 Firebase Cloud Messaging', '🔗 Deep Linking', '🎨 Material Design 2']),
  },
  {
    slug: 'beyik-yol',
    name: 'Beyik Yol — Traffic Conditions',
    category: 'Android · Maps',
    summary: 'Real-time traffic congestion and route planning for Ashgabat.',
    description: '"Beyik Yol" shows traffic conditions on the roads by determining congestion in Ashgabat city, so users can plan routes efficiently. It also lets users call for emergency help in case of an incident. Built with Java and Yandex MapKit.',
    images: ['/images/beyik/screen-1.png', '/images/beyik/screen-2.png', '/images/beyik/screen-3.png', '/images/beyik/screen-4.png', '/images/beyik/screen-5.png', '/images/beyik/screen-6.png', '/images/beyik/screen-7.png', '/images/beyik/screen-8.png'],
    links: [{ url: 'https://play.google.com/store/apps/details?id=com.geekspace.beyikyol&hl=en', title: 'Play Store' }],
    tech: t(['☕ Java & XML', '🗺️ Yandex MapKit', '🗄️ SQLite', '🔗 Retrofit', '🧩 Dagger Hilt', '🔥 Firebase Cloud Messaging']),
  },
  {
    slug: 'biolog',
    name: 'BioLog',
    category: 'Android · Education',
    summary: 'Biology and zoology learning app.',
    description: 'A learning app for biology and zoology students, built natively with Java, Dagger Hilt and Material Design.',
    images: ['/images/biology/Screenshot_20230514_191504_BioLog.jpg', '/images/biology/Screenshot_20230514_191543_BioLog.jpg', '/images/biology/Screenshot_20230514_191601_BioLog.jpg', '/images/biology/Screenshot_20230514_191631_BioLog.jpg', '/images/biology/Screenshot_20230514_191655_BioLog.jpg'],
    links: [],
    tech: t(['☕ Java & XML', '🧩 Dagger Hilt', '🎨 Material Design 2']),
  },
  {
    slug: 'sanly-gatnashyk',
    name: 'Sanly Gatnaşyk — Attendance',
    category: 'Android · Backend · EdTech',
    summary: 'Digital student-attendance logs with SMS notifications to parents.',
    description: 'Teachers waste time producing paper attendance reports. Sanly Gatnaşyk digitises it: create student-engagement reports instantly, store everything in a database, filter and visualise statistics, and automatically SMS parents when a student is late. Android app with a React admin panel and Express/PostgreSQL backend, using a foreground service and Socket.IO for real-time SMS dispatch.',
    images: ['/images/sanly/Screenshot_20230326_181044_SanlyGatnashyk.jpg', '/images/sanly/Screenshot_20230326_181139_SanlyGatnashyk.jpg', '/images/sanly/Screenshot_20230326_181216_SanlyGatnashyk.jpg', '/images/sanly/Screenshot 2023-03-26 182214.png', '/images/sanly/Screenshot 2023-03-26 182432.png', '/images/sanly/Screenshot 2023-03-26 182236.png'],
    links: [],
    tech: t(['☕ Java & XML', '🗄️ Room Database', '🔗 Retrofit', '🧩 Dagger Hilt', '🎨 Material Design 3', '🛡️ Foreground Service', '📨 SMS Sending', 'Socket IO', '⚛️ React JS', '🚀 Express JS', '🐘 PostgreSQL']),
  },
  {
    slug: 'komekci',
    name: 'KomekçiTM — Marketplace',
    category: 'Android · Marketplace',
    summary: "Turkmenistan's premier buy-sell-connect marketplace platform.",
    description: 'Discover Komekçi TM — Turkmenistan\'s premier marketplace platform. Buy, sell and connect with ease, from local products to unique services, all in one place. A feature-rich Jetpack Compose app with Coil, Lottie, Socket.IO, real-time chat and a polished Material 3 experience.',
    images: ['/images/komek/screen-1.png', '/images/komek/screen-2.png', '/images/komek/screen-3.png'],
    links: [{ url: 'https://play.google.com/store/apps/details?id=com.komekci.marketplace&hl=en', title: 'Play Store' }],
    tech: t(['☕ Kotlin', '🧬 Jetpack Compose', '🧭 Navigation Compose', '📡 Retrofit', '🪢 Coroutines', '📦 Dagger Hilt', '🏠 Room Database', '🖼️ Coil', '🎭 Lottie', '📡 Socket.IO']),
  },
  {
    slug: 'game-launcher',
    name: 'Game Launcher',
    category: 'Compose Desktop',
    summary: 'Turkmen game launcher built with Compose for Desktop.',
    description: 'A Turkmen game launcher built with Compose for Desktop. Ktor networking, Voyager navigation and a NestJS + React TypeScript admin backend, with MSI installers produced automatically through GitHub Actions — no Windows machine required.',
    images: ['/images/game/img3.png', '/images/game/img2.png', '/images/game/img9.png', '/images/game/img7.png', '/images/game/screen2.png', '/images/game/screen6.png'],
    links: [{ url: 'https://github.com/kotlin-compose-multiplatform/TmGameClient/tree/main', title: 'Source Code' }],
    tech: t(['☕ Kotlin', '🖥️ Compose for Desktop', '🌐 Ktor', '🧭 Voyager', '🎨 Material 3', '⚙️ GitHub Actions', '🦄 NestJS', '⚛️ React TypeScript', '🐘 PostgreSQL']),
  },
  {
    slug: 'wakant',
    name: 'Wakant — Job Platform',
    category: 'Web · React',
    summary: 'Employment-focused online job platform connecting seekers and employers.',
    description: 'Wakant is a business and employment-focused online job platform. Jobseekers post their CVs and employers post jobs via recruitment agencies. It aims to become one of the largest social networks for online jobs, helping people find roles that suit their profession and skills. Built with React, React Router and MUI.',
    images: ['/images/wakant.png', '/images/wakant/Screenshot 2025-06-02 at 18.02.05.png', '/images/wakant/Screenshot 2025-06-02 at 18.02.13.png', '/images/wakant/Screenshot 2025-06-02 at 18.02.18.png', '/images/wakant/Screenshot 2025-06-02 at 18.02.25.png'],
    links: [{ url: 'http://wakant.com.tm/', title: 'Website' }],
    tech: t(['⚛️ React TS', '⚛️ React Router', '⚛️ MUI']),
  },
  {
    slug: 'food-delivery',
    name: 'Food Delivery System',
    category: 'Android · Firebase',
    summary: 'Four-app delivery system with live courier GPS tracking.',
    description: 'A complete food-delivery system spanning client, admin, courier and kitchen apps. Built with Firebase Firestore, Java and XML, with a standout live courier GPS-tracking feature.',
    images: ['/images/food.png', '/images/delivery/Screenshot 2025-06-02 at 17.37.32.png', '/images/delivery/Screenshot 2025-06-02 at 17.38.03.png', '/images/delivery/Screenshot 2025-06-02 at 17.38.31.png', '/images/delivery/Screenshot 2025-06-02 at 17.38.46.png'],
    links: [{ url: 'https://drive.google.com/file/d/1li4Yy8Ip779K_fNkm5KhEcywoyI6H_7n/view?usp=sharing', title: 'Video Demo' }],
    tech: t(['☕ Java', '🧱 XML', '📦 Firebase Firestore', '📨 Firebase Cloud Messaging', '🗺️ Google Maps SDK', '📁 SQLite', '🎨 Material Design 2']),
  },
  {
    slug: 'turkmen-search',
    name: 'Turkmen Sites Search',
    category: 'Web · AI',
    summary: 'AI-powered search across Turkmen websites using Gemini.',
    description: 'Search across Turkmen websites using Gemini AI. A React + Tailwind front end combined with the Gemini API and Google Search API for intelligent, multimodal results.',
    images: ['/images/search_tm.png', '/images/Screenshot 2025-06-02 at 18.15.02.png'],
    links: [{ url: 'https://search-from-turkmen-sites.vercel.app/search', title: 'Website' }],
    tech: t(['⚛️ React', '🎨 Tailwind CSS', '🧠 Gemini API', '🔍 Google Search API']),
  },
  {
    slug: 'shopify-cache',
    name: 'Shopify Cache Store',
    category: 'Full-Stack · Search',
    summary: 'Shopify GraphQL + Elasticsearch full-stack commerce cache.',
    description: 'A full-stack application integrating the Shopify GraphQL API with Elasticsearch. React + TypeScript on the front end, NestJS + TypeScript on the back end, Redux Toolkit Query for state, and Docker for containerisation.',
    images: ['https://raw.githubusercontent.com/kotlin-compose-multiplatform/shopify-cache-store/main/img/splash.png'],
    links: [{ url: 'https://github.com/kotlin-compose-multiplatform/shopify-cache-store', title: 'Source Code' }],
    tech: t(['🏗️ NestJS', '📝 TypeScript', '⚛️ React', '🐘 PostgreSQL', '🗄️ TypeORM', '🛍️ Shopify GraphQL', '🔍 Elasticsearch', '🐳 Docker']),
  },
  {
    slug: 'visual-dictionary',
    name: 'Visual Dictionary Desktop',
    category: 'Desktop · C#',
    summary: 'Architecture visual dictionary with text-to-speech, built in C#.',
    description: 'A desktop visual dictionary for architecture terms, built in C# with Windows Forms, SQLite storage and Windows text-to-speech for spoken definitions.',
    images: ['/images/dictionary/dictionary-1.png', '/images/dictionary/dictionary-2.png', '/images/dictionary/dictionary-3.png', '/images/dictionary/dictionary-4.png', '/images/dictionary/dictionary-5.png', '/images/dictionary/dictionary-6.png'],
    links: [{ url: 'https://drive.google.com/file/d/1ggRaiodtCY_FKmpWqCorecJibCqI7MJ1/view?usp=sharing', title: 'Video Demo' }],
    tech: t(['🧩 C#', '🪟 Windows Forms', '📁 SQLite', '🗣️ Windows Text-to-Speech']),
  },
  {
    slug: 'bootcamp-tm',
    name: 'Bootcamp Turkmenistan',
    category: 'Web',
    summary: 'Official website of Bootcamp Turkmenistan.',
    description: 'The official website of Bootcamp Turkmenistan, where I also mentored web development.',
    images: ['/images/bootcamp/bootcamp-1.png', '/images/bootcamp/bootcamp-2.png', '/images/bootcamp/bootcamp-3.png', '/images/bootcamp/bootcamp-4.png', '/images/bootcamp/bootcamp-5.png', '/images/bootcamp/bootcamp-6.png'],
    links: [
      { url: 'https://bootcamp-front.vercel.app/', title: 'Website' },
      { url: 'https://github.com/kotlin-compose-multiplatform/bootcamp-front', title: 'Source Code' },
    ],
    tech: [],
  },
  {
    slug: 'blind-and-deaf',
    name: 'Blind & Deaf Society of Turkmenistan',
    category: 'Web',
    summary: 'Official website of the Blind & Deaf Society of Turkmenistan.',
    description: 'The official website of the Blind & Deaf Society of Turkmenistan.',
    images: ['https://blind-and-deaf-client.vercel.app/images/Logo.svg'],
    links: [
      { url: 'https://blind-and-deaf-client.vercel.app/', title: 'Website' },
      { url: 'https://github.com/kotlin-compose-multiplatform/blind_and_deaf_client', title: 'Source Code' },
    ],
    tech: [],
  },
  {
    slug: 'saglykoty',
    name: 'Saglykoty — Pharmacy',
    category: 'Web · Landing',
    summary: 'Pharmacy landing-page website.',
    description: 'A pharmacy landing-page website for Saglykoty.',
    images: ['/images/saglyk.png'],
    links: [{ url: 'https://saglykoty.com.tm/', title: 'Website' }],
    tech: [],
  },
  {
    slug: 'adybelli',
    name: 'Adybelli — Shoe Store',
    category: 'Android',
    summary: 'Shoe-store app (archived project).',
    description: 'An Android shoe-store app. A deprecated, archived project.',
    images: ['/images/adybelli/screen-0.jpg', '/images/adybelli/screen-1.jpg', '/images/adybelli/screen-2.jpg', '/images/adybelli/screen-3.jpg', '/images/adybelli/screen-4.jpg', '/images/adybelli/screen-5.jpg', '/images/adybelli/screen-6.jpg'],
    links: [{ url: 'https://apkpure.com/adybelli/com.adybelli.android/download', title: 'Download' }],
    tech: [],
  },
  {
    slug: 'youtube-parser',
    name: 'YouTube Parser',
    category: 'Tooling',
    summary: 'YouTube channel/video/comments parser with pagination.',
    description: 'A parser for YouTube channel details, video details and comments, with pagination support.',
    images: ['https://variety.com/wp-content/uploads/2020/06/youtube-logo.png'],
    links: [{ url: 'https://github.com/kotlin-compose-multiplatform/parser', title: 'Source Code' }],
    tech: [],
  },
  {
    slug: 'kotlin-bot',
    name: 'Kotlin Playground Telegram Bot',
    category: 'Tooling · Bot',
    summary: 'Compile Kotlin code and get results right inside Telegram.',
    description: 'Send Kotlin code to this Telegram bot and it compiles your code and returns the results to you.',
    images: ['/images/kotlinbot.png'],
    links: [
      { url: 'https://t.me/kotlintm_bot', title: 'Use Bot' },
      { url: 'https://github.com/kotlin-compose-multiplatform/kotlin_tm_bot', title: 'Source Code' },
    ],
    tech: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export interface Library {
  name: string;
  description: string;
  url: string;
  logo: string;
  // Short label for the registry / platform the package lives on.
  registry: string;
}

export const libraries: Library[] = [
  {
    name: 'yedu-kmp-gps-listener',
    description:
      'A headless (no UI) Kotlin Multiplatform library that provides background GPS location listening on Android and iOS. Ported from the Traccar GPS tracking clients for both platforms.',
    url: 'https://klibs.io/project/yedu-taxi/yedu-kmp-gps-listener',
    logo: '/images/libraries/yedu-gps.webp',
    registry: 'klibs.io',
  },
  {
    name: 'tm-chat',
    description:
      'A group-chat system built around chat rooms. A room holds one or many users; with two people it behaves like a one-to-one chat. A new room is created each time a user opens a chat.',
    url: 'https://www.npmjs.com/package/tm-chat',
    logo: '/images/libraries/npm.png',
    registry: 'npm',
  },
  {
    name: 'blurhash-generator',
    description: 'Helper library to generate image hash strings for BlurHash placeholders.',
    url: 'https://www.npmjs.com/package/blurhash-generator?activeTab=readme',
    logo: '/images/libraries/npm.png',
    registry: 'npm',
  },
  {
    name: 'turkmen-converter',
    description: 'Turkmen letter converter and typo generator.',
    url: 'https://www.npmjs.com/package/turkmen-converter',
    logo: '/images/libraries/npm.png',
    registry: 'npm',
  },
  {
    name: 'turkmen-pelias-model',
    description:
      'Pelias data model for Turkmenistan. Pelias is an open-data geocoder that turns addresses and place names into coordinates — and coordinates back into real places and addresses.',
    url: 'https://www.npmjs.com/package/turkmen-pelias-model',
    logo: '/images/libraries/npm.png',
    registry: 'npm',
  },
  {
    name: 'turkmen-pelias-query',
    description: 'Elasticsearch geospatial and linguistic matching queries used by Pelias.',
    url: 'https://www.npmjs.com/package/turkmen-pelias-query',
    logo: '/images/libraries/npm.png',
    registry: 'npm',
  },
];
