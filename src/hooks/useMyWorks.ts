export interface WorkLink {
    url: string;
    title: string;
    image: string;
}

export interface UsedTechnology {
    name: string;
    url: string;
    icon: string;
    description: string;
    percentage?: number | 0;
}

export interface MyWork {
    name: string;
    description: string;
    images: string[];
    links: WorkLink[];
    technologies: UsedTechnology[];
}

export function useMyWorks() {
    const works: MyWork[] = [
        {
            name: "Balary - Also showing in <Jetbrains/> KMP showcase site",
            description: "Balary online supermarket has more than 50 categories of goods. Seasonal Vegetables, Fruits, Home Goods and much more! And if you think you might forget something, you can save your personal list of purchases with our phone app or website membership and use them on your next order!",
            images: [
                "/images/balary/screen-1.jpg",
                "/images/balary/screen-2.jpg",
                "/images/balary/screen-3.jpg",
                "/images/balary/screen-4.jpg",
                "/images/balary/screen-5.jpg",
                "/images/balary/screen-6.jpg",
                "/images/balary/screen-7.jpg",
            ],
            links: [
                {
                    url: "https://www.jetbrains.com/help/kotlin-multiplatform-dev/case-studies.html",
                    title: "Jetbrains Showcase",
                    image: "/icons/jb-kotlin-multiplatform-logo.svg"
                },
                {
                    url: "https://play.google.com/store/apps/details?id=tm.com.balary&hl=en",
                    title: "Play store",
                    image: "/icons/playstore.svg"
                },
                {
                    url: "https://apps.apple.com/tm/app/balary/id1482230836",
                    title: "App store",
                    image: "/icons/appstore.svg"
                }
            ],
            technologies: [
                {
                    name: "🧩 Compose Multiplatform",
                    description: "💡 Balary is crafted with Kotlin Multiplatform and Compose Multiplatform, enabling seamless UI sharing across Android 📱 and iOS 🍎. Platform-specific features like 🗺️ MapLibre maps and 🎞️ video playback are integrated via `expect/actual` declarations using native views (Android XML / UIKit).",
                    url: "https://www.jetbrains.com/compose-multiplatform/",
                    icon: "/skills/compose multiplatform.svg",
                    percentage: 100
                },
                {
                    name: "🧬 JNI + FFmpeg",
                    description: "⚙️ For advanced video compression 🎥 on Android, we use JNI to call C/C++ code via FFmpeg. This native bridge boosts performance and brings precise media control directly from Kotlin.",
                    url: "https://en.wikipedia.org/wiki/Java_Native_Interface",
                    icon: "/skills/check.svg",
                    percentage: 4
                },
                {
                    name: "🗺️ MapLibre + Nominatim",
                    description: "🌍 We use MapLibre to render beautiful maps powered by a self-hosted OpenStreetMap tile server. Combined with Nominatim for 🔎 search and reverse geocoding, users get fast, private, and offline-friendly mapping features.",
                    url: "https://maplibre.org/",
                    icon: "/skills/check.svg",
                    percentage: 15
                },
                {
                    name: "📦 Room KMP",
                    description: "🛢️ For offline-first support, we use Room for Kotlin Multiplatform to cache key data locally across platforms. This ensures smooth user experiences even without internet.",
                    url: "https://developer.android.com/kotlin/multiplatform/room",
                    icon: "/skills/check.svg",
                    percentage: 20
                },
                {
                    name: "▶️ Video Player  ",
                    description: " 🤖 We use expect/actual mechanism to play video with url using ExoPlayer on Android Target and AVPlayer on iOS target",
                    url: "https://www.jetbrains.com/help/kotlin-multiplatform-dev/multiplatform-expect-actual.html#advanced-use-cases",
                    icon: "/skills/check.svg",
                    percentage: 10
                },
                {
                    name: "🌐 Ktor Client",
                    description: "🔗 Networking is powered by Ktor: OkHttp on Android and Darwin engine on iOS. It's lightweight, coroutine-friendly, and ideal for modern multiplatform apps.",
                    url: "https://ktor.io/docs/client-create-and-configure.html",
                    icon: "/skills/ktor.png",
                    percentage: 70
                }
            ]
        },
        {
            "name": "Tex Logistic - Freight Made Simple with Jetpack Compose",
            "description": "Tex Logistic is a modern, modular logistics platform built with Jetpack Compose. It handles everything from order placement to real-time tracking and delivery confirmation. Designed with a clean architecture and fully localized, it's a production-ready freight coordination app built in Kotlin.",
            "images": [
                "/images/tex/order.png",
                "/images/tex/dark.png",
                "/images/tex/tracking.png",
                "/images/tex/delivery.png",
                "/images/tex/map.png",
                "/images/tex/chat.png",
            ],
            "links": [
                {
                    url: "https://play.google.com/store/apps/details?id=com.tex.logistic",
                    title: "Play store",
                    image: "/icons/playstore.svg"
                },
                {
                    url: "https://texexpress.pro",
                    title: "Website",
                    image: "/icons/ph_link-bold.svg"
                }
            ],
            "technologies": [
                {
                    "name": "🧩 Jetpack Compose",
                    "description": "🖌️ Declarative UI toolkit used for building modern Android interfaces, integrated with Showkase for visual component browsing.",
                    "url": "https://developer.android.com/jetpack/compose",
                    "icon": "/skills/check.svg",
                    "percentage": 100
                },
                {
                    "name": "🌐 Ktor Client",
                    "description": "🔗 Kotlin-native HTTP client used for seamless networking across all platforms.",
                    "url": "https://ktor.io/docs/client-create-and-configure.html",
                    "icon": "/skills/ktor.png",
                    "percentage": 80
                },
                {
                    "name": "🧪 Koin",
                    "description": "🧠 Lightweight dependency injection framework to keep the architecture modular and testable.",
                    "url": "https://insert-koin.io/",
                    "icon": "/skills/check.svg",
                    "percentage": 60
                },
                {
                    "name": "🗺️ Google Maps Compose",
                    "description": "📍 Enables real-time route visualization and geolocation features using Maps SDK integrated into Jetpack Compose.",
                    "url": "https://developer.android.com/reference/com/google/maps/android/compose/package-summary",
                    "icon": "/skills/check.svg",
                    "percentage": 75
                },
                {
                    "name": "🌍 Lyricist",
                    "description": "🈺 Compose-compatible multilingual localization system for dynamic runtime language switching.",
                    "url": "https://github.com/adrielcafe/lyricist",
                    "icon": "/skills/check.svg",
                    "percentage": 50
                },
                {
                    "name": "🧪 GitHub Actions",
                    "description": "⚙️ Automated workflows to test, build, and distribute APKs on push and pull request events.",
                    "url": "https://docs.github.com/en/actions",
                    "icon": "/skills/check.svg",
                    "percentage": 65
                },
                {
                    "name": "🧱 Clean Architecture",
                    "description": "🧬 Modular design with clear separation of concerns across data, domain, and presentation layers.",
                    "url": "https://proandroiddev.com/kotlin-clean-architecture-1ad42fcd97fa",
                    "icon": "/skills/check.svg",
                    "percentage": 100
                },
                {
                    "name": "📸 Showkase",
                    "description": "🧩 Airbnb's UI browser for Jetpack Compose used to organize and preview typography, components, and themes.",
                    "url": "https://github.com/airbnb/showkase",
                    "icon": "/skills/check.svg",
                    "percentage": 40
                },
                {
                    "name": "🧪 JUnit + Truth",
                    "description": "🧪 Unit testing libraries used alongside AndroidX test APIs for high code confidence.",
                    "url": "https://truth.dev/",
                    "icon": "/skills/check.svg",
                    "percentage": 30
                }
            ]
        },
        {
            "name": "Tex Driver - GPS Sender for Tex Logistic",
            "description": "Tex Driver is the companion GPS-sender app for Tex Logistic. Built for Android, it runs a lightweight foreground service that automatically sends the driver's location every 10 seconds or every 10 meters. It is 100% free and open-source, built with privacy, configurability, and reliability in mind.",
            "images": [
                "/images/tex-driver/1.png",
                "/images/tex-driver/2.png",
                "/images/tex-driver/3.png",
                "/images/tex-driver/4.png",
                "/images/tex-driver/5.png"
            ],
            "links": [
                {
                    url: "https://play.google.com/store/apps/details?id=org.texlogistic.client",
                    title: "Play store",
                    image: "/icons/playstore.svg"
                },
                {
                    url: "https://texexpress.pro",
                    title: "Website",
                    image: "/icons/ph_link-bold.svg"
                }
            ],
            "technologies": [
                {
                    "name": "📍 Android Foreground Service",
                    "description": "🚚 Uses Android’s foreground service to send location updates reliably every 10 seconds or 10 meters—even when the app is in the background.",
                    "url": "https://developer.android.com/guide/components/foreground-services",
                    "icon": "/skills/check.svg",
                    "percentage": 80
                },
                {
                    "name": "🌐 Ktor Client",
                    "description": "🔗 Sends location data to your own server via Ktor HTTP client. Fully configurable to suit any API.",
                    "url": "https://ktor.io/docs/client-create-and-configure.html",
                    "icon": "/skills/ktor.png",
                    "percentage": 40
                },
                {
                    "name": "🔧 Configurable Parameters",
                    "description": "⚙️ Update intervals (time/distance), accuracy, and server endpoint can be customized based on needs.",
                    "url": "https://developer.android.com/reference/android/location/LocationRequest",
                    "icon": "/skills/check.svg",
                    "percentage": 30
                },
                {
                    "name": "🛡️ Privacy First",
                    "description": "🔒 Location data is never sent to third parties—only to the server you configure. No ads, no tracking.",
                    "url": "https://opensource.org/licenses/MIT",
                    "icon": "/skills/check.svg",
                    "percentage": 100
                }
            ]
        },
        {
            name: "YTM GPS",
            description: "The YTM company offers a solution for GPS-tracking that works with 2,600 types of devices, as well as the following: - online tracking - reading data - geofencing monitoring (on the street and at home) - fuel monitoring - exact location of a person outdoors and indoors - recording of travel routes - marking red, yellow and green zones - direct reporting of incidents. ",
            images: [
                "/images/ytm/screen-1.jpg",
                "/images/ytm/screen-2.jpg",
                "/images/ytm/screen-3.jpg",
                "/images/ytm/screen-4.jpg",
                "/images/ytm/screen-5.jpg",
                "/images/ytm/screen-6.jpg",
                "/images/ytm/screen-7.jpg",
                "/images/ytm/screen-8.jpg",
            ],
            links: [
                {
                    url: "https://play.google.com/store/apps/details?id=com.gs.wialonlocal.android&hl=en",
                    title: "Play store",
                    image: "/icons/playstore.svg"
                }
            ],
            technologies: [
                {
                    name: "🧩 Compose Multiplatform",
                    description: "💡 Balary is built with Kotlin Multiplatform and Compose Multiplatform, enabling seamless UI sharing across Android 📱 and iOS 🍎. Platform-specific features like 🗺️ MapLibre maps and 🎞️ video playback are integrated via `expect/actual` declarations using native views (Android XML / UIKit).",
                    url: "https://www.jetbrains.com/compose-multiplatform/",
                    icon: "/skills/compose multiplatform.svg",
                    percentage: 100
                },
                {
                    name: "🗺️ Google Maps",
                    description: "🌍 Google Maps integration is achieved using the `expect/actual` mechanism for Android and iOS targets.",
                    url: "https://developers.google.com/maps/documentation/android-sdk/maps-compose",
                    icon: "/skills/check.svg",
                    percentage: 65
                },
                {
                    name: "📦 Koin",
                    description: "📚 We use the Koin library for dependency injection in our Kotlin Multiplatform architecture.",
                    url: "https://insert-koin.io/",
                    icon: "/skills/check.svg",
                    percentage: 70
                },
                {
                    name: "🧭 Compose Navigation",
                    description: "🛣️ We use JetBrains' official Compose Navigation library, a fork of the Android Jetpack Compose Navigation. Previously, we used Voyager, but switched due to frequent crashes and ANRs from the Play Console, including `Parcelable` and `Nested CompositionLocalProvider` errors when managing global state.",
                    url: "https://www.jetbrains.com/help/kotlin-multiplatform-dev/compose-navigation-routing.html",
                    icon: "/skills/check.svg",
                    percentage: 10
                },
                {
                    name: "🌐 Ktor Client",
                    description: "🔗 Networking is powered by Ktor—using OkHttp on Android and the Darwin engine on iOS. It's lightweight, coroutine-friendly, and ideal for modern multiplatform apps.",
                    url: "https://ktor.io/docs/client-create-and-configure.html",
                    icon: "/skills/ktor.png",
                    percentage: 70
                }
            ]
        },
        {
            name: "Operator",
            description: "This project helps operators on any kind of service company, customer call to operator and customer full information and history shows on the operator computer",
            images: [
                "/images/operator/Screenshot 2025-06-02 at 16.53.43.png",
                "/images/operator/Screenshot 2025-06-02 at 16.54.00.png",
                "/images/operator/Screenshot 2025-06-02 at 16.54.40.png",
                "/images/operator/Screenshot 2025-06-02 at 16.54.56.png",
                "/images/operator/Screenshot 2025-06-02 at 16.55.11.png",
                "/images/operator/Screenshot 2025-06-02 at 16.55.25.png"
            ],
            links: [
                {
                    url: "https://github.com/saggeldi/OperatorApp",
                    title: "Source code (android app)",
                    image: "/icons/mdi_github.svg"
                },
                {
                    url: "https://github.com/saggeldi/OperatorBackend",
                    title: "Source code (backend)",
                    image: "/icons/mdi_github.svg"
                },
                {
                    url: "https://github.com/saggeldi/operator-admin-front",
                    title: "Source code (admin front)",
                    image: "/icons/mdi_github.svg"
                },
                {
                    url: "https://github.com/saggeldi/OperatorCourier",
                    title: "Source code (android app courier)",
                    image: "/icons/mdi_github.svg"
                },
                {
                    url: "https://github.com/saggeldi/Operator-installer",
                    title: "Source code (pc installer c#)",
                    image: "/icons/mdi_github.svg"
                }
            ],
            technologies: [
                {
                    name: "☕ Java & XML",
                    description: "📱 The Android app is developed using Java and XML, following traditional Android development practices with clean separation of UI and logic layers.",
                    url: "https://developer.android.com/guide",
                    icon: "/skills/java.svg",
                    percentage: 100
                },
                {
                    name: "🗺️ Google Maps",
                    description: "🌍 Integrated Google Maps for displaying real-time locations, routes, and geographic interactions within the app using Google Maps SDK.",
                    url: "https://developers.google.com/maps/documentation/android-sdk/overview",
                    icon: "/skills/check.svg",
                    percentage: 80
                },
                {
                    name: "🗄️ SQLite",
                    description: "📂 Used for local storage of structured data with support for offline access, caching, and syncing when a network is available.",
                    url: "https://developer.android.com/training/data-storage/sqlite",
                    icon: "/skills/check.svg",
                    percentage: 75
                },
                {
                    name: "🔗 Deep Linking",
                    description: "🔗 Enables users to open specific app screens via URLs and supports app-to-app and web-to-app navigation for a smoother experience.",
                    url: "https://developer.android.com/training/app-links",
                    icon: "/skills/check.svg",
                    percentage: 65
                },
                {
                    name: "🔗 Retrofit",
                    description: "⚡ Retrofit is used for efficient HTTP networking and seamless communication with the backend. Supports JSON parsing with Gson.",
                    url: "https://square.github.io/retrofit/",
                    icon: "/skills/check.svg",
                    percentage: 85
                },
                {
                    name: "🧩 Dagger Hilt",
                    description: "🛠️ Dependency injection is managed using Dagger Hilt, promoting modularity, testability, and reducing boilerplate in Android components.",
                    url: "https://dagger.dev/hilt/",
                    icon: "/skills/check.svg",
                    percentage: 80
                },
                {
                    name: "🔥 Firebase Cloud Messaging",
                    description: "📬 Used to deliver real-time push notifications to users across various states of the app (foreground, background, or terminated).",
                    url: "https://firebase.google.com/docs/cloud-messaging",
                    icon: "/skills/check.svg",
                    percentage: 70
                },
                {
                    name: "🎨 Material Design 3",
                    description: "✨ Modern UI is built with Material 3 components, ensuring a consistent, accessible, and dynamic design system across the app.",
                    url: "https://m3.material.io/",
                    icon: "/skills/check.svg",
                    percentage: 90
                },
                {
                    name: "⚛️ React JS (Web Admin)",
                    description: "🧑‍💼 The admin panel is built using React JS, offering a fast and responsive interface for managing users, content, and system settings.",
                    url: "https://react.dev/",
                    icon: "/skills/check.svg",
                    percentage: 80
                },
                {
                    name: "🚀 Express JS (Backend)",
                    description: "🌐 A lightweight and flexible Node.js backend built using Express, handling RESTful APIs, authentication, and business logic.",
                    url: "https://expressjs.com/",
                    icon: "/skills/check.svg",
                    percentage: 75
                },
                {
                    name: "🐘 PostgreSQL",
                    description: "🧮 PostgreSQL is used as the primary relational database for secure, structured, and scalable data storage in the backend.",
                    url: "https://www.postgresql.org/",
                    icon: "/skills/check.svg",
                    percentage: 80
                },
                {
                    name: "🔁 Offline/Online Sync",
                    description: "🔄 Supports data syncing between local SQLite and remote PostgreSQL via REST APIs, with conflict resolution and retry strategies.",
                    url: "https://developer.android.com/topic/data/sync-adapters",
                    icon: "/skills/check.svg",
                    percentage: 85
                },
                {
                    name: "📞 CallScreeningService & BroadcastReceiver",
                    description: "📲 For Android 10+, `CallScreeningService` is used to monitor incoming operator calls. On older versions, a `BroadcastReceiver` listens for telephony events.",
                    url: "https://developer.android.com/reference/android/telecom/CallScreeningService",
                    icon: "/skills/check.svg",
                    percentage: 65
                }
            ]

        },
        {
            name: "Yarmarka TM",
            description: "Gifts for any occasion! Each work is Exclusive! Buy works directly from the artist!",
            images: [
                "/images/elishi/screen-1.jpg",
                "/images/elishi/screen-2.jpg",
                "/images/elishi/screen-3.jpg",
                "/images/elishi/screen-4.jpg",
                "/images/elishi/screen-5.jpg",
                "/images/elishi/screen-6.jpg",
                "/images/elishi/screen-7.jpg",
            ],
            links: [
                {
                    url: "https://play.google.com/store/apps/details?id=com.elishi.android&hl=en",
                    title: "Play store",
                    image: "/icons/playstore.svg"
                }
            ],
            technologies: [
                {
                    name: "☕ Java & XML",
                    description: "📱 The app is developed using Java as the main programming language with XML-based layouts for UI design, following classic Android architecture patterns.",
                    url: "https://developer.android.com/guide",
                    icon: "/skills/java.svg",
                    percentage: 100
                },
                {
                    name: "🔗 Retrofit",
                    description: "⚡ Retrofit is used for making type-safe HTTP network calls. It supports efficient REST API integration and works seamlessly with Gson for JSON parsing.",
                    url: "https://square.github.io/retrofit/",
                    icon: "/skills/check.svg",
                    percentage: 80
                },
                {
                    name: "🧩 Dagger Hilt",
                    description: "🗂️ Dependency injection is powered by Dagger Hilt, simplifying setup and improving code modularity, testability, and scalability.",
                    url: "https://dagger.dev/hilt/",
                    icon: "/skills/check.svg",
                    percentage: 75
                },
                {
                    name: "🔥 Firebase Cloud Messaging",
                    description: "📬 FCM is used to send push notifications to users reliably and efficiently, supporting both foreground and background message handling.",
                    url: "https://firebase.google.com/docs/cloud-messaging",
                    icon: "/skills/check.svg",
                    percentage: 60
                },
                {
                    name: "🔗 Deep Linking",
                    description: "🔍 Deep linking is implemented to allow users to navigate directly to specific screens or content in the app via URLs, improving user engagement and retention.",
                    url: "https://developer.android.com/training/app-links",
                    icon: "/skills/check.svg",
                    percentage: 60
                },
                {
                    name: "🎨 Material Design 2",
                    description: "✨ The app follows Material Design 2 guidelines for consistent theming, spacing, and components, ensuring a modern and intuitive UI/UX.",
                    url: "https://m2.material.io/",
                    icon: "/skills/check.svg",
                    percentage: 85
                }
            ]

        },
        {
            name: "Beyik Yol",
            description: "\"Beyik Yol\" - shows traffic conditions on the roads by determining the traffic congestion in Ashgabat city. Any user of our mobile application can get timely information so we can plan routes efficiently. One of the important features of our mobile software is the ability to call for emergency help in case of an emergency. This mobile application will be developed in future versions.",
            images: [
                "/images/beyik/screen-1.png",
                "/images/beyik/screen-2.png",
                "/images/beyik/screen-3.png",
                "/images/beyik/screen-4.png",
                "/images/beyik/screen-5.png",
                "/images/beyik/screen-6.png",
                "/images/beyik/screen-7.png",
                "/images/beyik/screen-8.png",
            ],
            links: [
                {
                    url: "https://play.google.com/store/apps/details?id=com.geekspace.beyikyol&hl=en",
                    title: "Play store",
                    image: "/icons/playstore.svg"
                }
            ],
            technologies: [
                {
                    name: "☕ Java & XML",
                    description: "📱 The app is built using Java as the primary programming language and XML for defining UI layouts, following conventional Android architecture and design principles.",
                    url: "https://developer.android.com/guide",
                    icon: "/skills/java.svg",
                    percentage: 100
                },
                {
                    name: "🗺️ Yandex MapKit",
                    description: "🧭 Yandex MapKit is used to integrate interactive maps, markers, and location tracking features within the app, providing detailed map functionality for Russia and CIS countries.",
                    url: "https://yandex.com/dev/maps/mapkit/",
                    icon: "/skills/check.svg",
                    percentage: 75
                },
                {
                    name: "🗄️ SQLite",
                    description: "📂 SQLite is used as the local database solution for offline data persistence and lightweight storage needs, accessed via Android's built-in database APIs.",
                    url: "https://developer.android.com/training/data-storage/sqlite",
                    icon: "/skills/check.svg",
                    percentage: 70
                },
                {
                    name: "🔗 Retrofit",
                    description: "⚡ Retrofit is used for making efficient HTTP requests and handling RESTful APIs. It simplifies networking and supports Gson for JSON serialization/deserialization.",
                    url: "https://square.github.io/retrofit/",
                    icon: "/skills/check.svg",
                    percentage: 80
                },
                {
                    name: "🧩 Dagger Hilt",
                    description: "🛠️ Dagger Hilt is used for dependency injection, making the codebase more modular, scalable, and testable with minimal boilerplate.",
                    url: "https://dagger.dev/hilt/",
                    icon: "/skills/check.svg",
                    percentage: 75
                },
                {
                    name: "🔥 Firebase Cloud Messaging",
                    description: "📬 FCM is used to send real-time push notifications to users, handling both background and foreground messaging scenarios seamlessly.",
                    url: "https://firebase.google.com/docs/cloud-messaging",
                    icon: "/skills/check.svg",
                    percentage: 60
                },
                {
                    name: "🎨 Material Design 2",
                    description: "✨ The app UI adheres to Material Design 2 guidelines, offering a clean, modern user experience with consistent components, colors, and animations.",
                    url: "https://m2.material.io/",
                    icon: "/skills/check.svg",
                    percentage: 85
                }
            ]

        },
        {
            name: "BioLog",
            description: "Biology and Zoology learners app",
            images: [
                "/images/biology/Screenshot_20230514_191504_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191543_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191601_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191631_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191655_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191846_Camera.jpg",
                "/images/biology/Screenshot_20230514_191512_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191552_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191610_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191642_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191659_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191936_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191525_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191557_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191616_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191649_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191712_BioLog.jpg",
                "/images/biology/Screenshot_20230514_191943_BioLog.jpg"
            ],
            links: [],
            technologies: [
                {
                    name: "☕ Java & XML",
                    description: "📱 The app is developed using Java as the main programming language with XML-based layouts for UI design, following classic Android architecture patterns.",
                    url: "https://developer.android.com/guide",
                    icon: "/skills/java.svg",
                    percentage: 100
                },
                {
                    name: "🧩 Dagger Hilt",
                    description: "🗂️ Dependency injection is powered by Dagger Hilt, simplifying setup and improving code modularity, testability, and scalability.",
                    url: "https://dagger.dev/hilt/",
                    icon: "/skills/check.svg",
                    percentage: 75
                },
                {
                    name: "🎨 Material Design 2",
                    description: "✨ The app follows Material Design 2 guidelines for consistent theming, spacing, and components, ensuring a modern and intuitive UI/UX.",
                    url: "https://m2.material.io/",
                    icon: "/skills/check.svg",
                    percentage: 85
                }
            ]
        },
        {
            name: "Sanly gatnashyk",
            description: "Problems: " +
                "1. Our teachers wasting time, while getting student engagement logs and making reports. " +
                "2. All over the world everything growing up and switching to the digital system. But we are still wasting a lot of papers everyday for some reasons. We are making reports with papers and we lost our time. " +
                "3. Make reports with papers, but we can’t manage when that data is big " +
                "" +
                "Why We Need This App?" +
                "1. You can create easily student engagement reports without wasting your time" +
                "2. All student engagement reports will be save to the database, you don’t need paper or other things" +
                "3. You can find any type of reports using advanced filters. And display statistics about student engagements" +
                "4. Application sending sms notifications to the student parents, when student late to the university",
            images: [
                "/images/sanly/Screenshot_20230326_181044_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181139_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181216_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181942_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181052_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181143_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181221_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181056_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181147_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181237_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181108_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181154_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181307_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181032_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181122_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181203_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181837_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181039_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181132_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181207_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot_20230326_181920_SanlyGatnashyk.jpg",
                "/images/sanly/Screenshot 2023-03-26 182214.png",
                "/images/sanly/Screenshot 2023-03-26 182432.png",
                "/images/sanly/Screenshot 2023-03-26 182236.png",
                "/images/sanly/Screenshot 2023-03-26 182453.png",
                "/images/sanly/Screenshot 2023-03-26 182254.png",
                "/images/sanly/Screenshot 2023-03-26 182509.png",
                "/images/sanly/Screenshot 2023-03-26 182311.png",
                "/images/sanly/Screenshot 2023-03-26 182522.png",
                "/images/sanly/Screenshot 2023-03-26 182331.png",
                "/images/sanly/Screenshot 2023-03-26 182407.png",
            ],
            links: [],
            technologies: [
                {
                    name: "☕ Java & XML",
                    description: "📱 The app is developed using Java and XML, leveraging Android's traditional architecture with robust component separation and performance optimization.",
                    url: "https://developer.android.com/guide",
                    icon: "/skills/java.svg",
                    percentage: 100
                },
                {
                    name: "🗄️ Room Database",
                    description: "💾 Room is used as the local database for structured, relational data. It simplifies SQLite access with compile-time query checks and LiveData/Flow support.",
                    url: "https://developer.android.com/jetpack/androidx/releases/room",
                    icon: "/skills/check.svg",
                    percentage: 80
                },
                {
                    name: "🔗 Retrofit",
                    description: "🌐 Retrofit is responsible for handling RESTful API communication with the backend. It supports clean code practices with interceptors and GSON parsing.",
                    url: "https://square.github.io/retrofit/",
                    icon: "/skills/check.svg",
                    percentage: 85
                },
                {
                    name: "🧩 Dagger Hilt",
                    description: "🛠️ Dependency injection is streamlined using Dagger Hilt, promoting modularization, testability, and clean architecture in the Android codebase.",
                    url: "https://dagger.dev/hilt/",
                    icon: "/skills/check.svg",
                    percentage: 80
                },
                {
                    name: "🎨 Material Design 3",
                    description: "✨ The UI adheres to Material 3 design principles, offering a consistent, modern visual language across components, typography, and themes.",
                    url: "https://m3.material.io/",
                    icon: "/skills/check.svg",
                    percentage: 90
                },
                {
                    name: "🛡️ Foreground Service",
                    description: "🚧 Foreground services are used to perform ongoing background tasks such as long-running operations, including sending SMS, while staying visible to the user.",
                    url: "https://developer.android.com/guide/components/foreground-services",
                    icon: "/skills/check.svg",
                    percentage: 70
                },
                {
                    name: "📨 SMS Sending & Status Tracking",
                    description: "📲 SMS is sent from a ForegroundService, and delivery and sent statuses are monitored using BroadcastReceiver with `SmsManager` and custom `PendingIntent`s.",
                    url: "https://developer.android.com/reference/android/telephony/SmsManager",
                    icon: "/skills/check.svg",
                    percentage: 75
                },
                {
                    name: "Socket IO",
                    description: "To handle send sms event from admin panel",
                    url: "https://socket.io/",
                    icon: "/skills/check.svg",
                    percentage: 85
                },
                {
                    name: "⚛️ React JS (Web Admin)",
                    description: "🧑‍💼 The admin panel is built using React JS, offering a fast and responsive interface for managing users, content, and system settings.",
                    url: "https://react.dev/",
                    icon: "/skills/check.svg",
                    percentage: 80
                },
                {
                    name: "🚀 Express JS (Backend)",
                    description: "🌐 A lightweight and flexible Node.js backend built using Express, handling RESTful APIs, authentication, and business logic.",
                    url: "https://expressjs.com/",
                    icon: "/skills/check.svg",
                    percentage: 75
                },
                {
                    name: "🐘 PostgreSQL",
                    description: "🧮 PostgreSQL is used as the primary relational database for secure, structured, and scalable data storage in the backend.",
                    url: "https://www.postgresql.org/",
                    icon: "/skills/check.svg",
                    percentage: 80
                },
                {
                    name: "🔁 Offline/Online Sync",
                    description: "🔄 Supports data syncing between local SQLite and remote PostgreSQL via REST APIs, with conflict resolution and retry strategies.",
                    url: "https://developer.android.com/topic/data/sync-adapters",
                    icon: "/skills/check.svg",
                    percentage: 85
                },
            ]

        },
        {
            name: "KomekciTM",
            description: "Discover \"Komekchi TM\" – Turkmenistan's premier marketplace platform! Buy, sell, and connect with ease. Find everything you need, from local products to unique services, all in one place. Join the Komekchi TM community today and experience seamless transactions and endless opportunities.",
            images: [
                "/images/komek/screen-1.png",
                "/images/komek/screen-2.png",
                "/images/komek/screen-3.png",
            ],
            links: [
                {
                    url: "https://play.google.com/store/apps/details?id=com.komekci.marketplace&hl=en",
                    title: "Play store",
                    image: "/icons/playstore.svg"
                }
            ],
            technologies: [
                {
                    name: "☕ Kotlin",
                    description: "Modern programming language for Android development, used for writing robust and concise code.",
                    url: "https://kotlinlang.org/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🔧 Android Gradle Plugin (AGP)",
                    description: "Build system integration and configuration management for Android projects.",
                    url: "https://developer.android.com/build",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🧬 Jetpack Compose",
                    description: "Modern toolkit for building native Android UIs with declarative components.",
                    url: "https://developer.android.com/jetpack/compose",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🧭 Navigation Compose",
                    description: "Official navigation framework for Jetpack Compose apps.",
                    url: "https://developer.android.com/jetpack/compose/navigation",
                    icon: "/skills/check.svg"
                },
                {
                    name: "📡 Retrofit",
                    description: "Type-safe HTTP client for Android and Java used for networking and RESTful API communication.",
                    url: "https://square.github.io/retrofit/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🔐 OkHttp & Logging Interceptor",
                    description: "Efficient HTTP client with logging capabilities used under Retrofit for networking.",
                    url: "https://square.github.io/okhttp/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🪢 Coroutines",
                    description: "Kotlin concurrency library for managing background threads and asynchronous code.",
                    url: "https://kotlinlang.org/docs/coroutines-overview.html",
                    icon: "/skills/check.svg"
                },
                {
                    name: "📦 Dagger Hilt",
                    description: "Dependency injection framework that simplifies DI setup and usage across Android components.",
                    url: "https://dagger.dev/hilt/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🏠 Room Database",
                    description: "Jetpack persistence library that provides an abstraction layer over SQLite.",
                    url: "https://developer.android.com/jetpack/androidx/releases/room",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🧬 Lifecycle KTX",
                    description: "Jetpack library providing lifecycle-aware components with Kotlin extensions.",
                    url: "https://developer.android.com/jetpack/androidx/releases/lifecycle",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🧪 JUnit & Espresso",
                    description: "JUnit is used for unit testing, while Espresso handles UI automation testing.",
                    url: "https://developer.android.com/training/testing",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🎨 Material 3",
                    description: "Latest Material Design library offering updated components and theming for Compose.",
                    url: "https://m3.material.io/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "📝 DataStore",
                    description: "Modern data storage solution replacing SharedPreferences, supporting both key-value and typed object storage.",
                    url: "https://developer.android.com/topic/libraries/architecture/datastore",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🌎 Gson & Kotlinx Serialization",
                    description: "Libraries for parsing and serializing JSON data efficiently.",
                    url: "https://github.com/google/gson",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🖼️ Coil",
                    description: "Lightweight image loading library for Jetpack Compose and Android.",
                    url: "https://coil-kt.github.io/coil/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🎭 Lottie",
                    description: "Library for rendering Adobe After Effects animations natively on Android.",
                    url: "https://airbnb.io/lottie/#/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🗂️ Compose Image Picker",
                    description: "Composable image picker component for selecting images from the device gallery.",
                    url: "https://github.com/huhx/compose-image-picker",
                    icon: "/skills/check.svg"
                },
                {
                    name: "📡 Socket.IO Client",
                    description: "Real-time bidirectional event-based communication for Android using Socket.IO.",
                    url: "https://socket.io/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🔐 Accompanist Permissions",
                    description: "Jetpack Compose permission handling using Accompanist.",
                    url: "https://google.github.io/accompanist/permissions/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🌐 Compose WebView",
                    description: "WebView support in Jetpack Compose for rendering HTML content.",
                    url: "https://github.com/kevinnzou/compose-webview",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🌍 Lyricist",
                    description: "Multiplatform localization library for Compose UI with code-based string management.",
                    url: "https://github.com/adrielcafe/lyricist",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🧱 Toolbar Collapsing & Blur",
                    description: "Compose UI components for collapsing headers and applying blur effects.",
                    url: "https://github.com/onebone/ToolbarCompose",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🧭 Hilt Navigation Compose",
                    description: "Integration of Dagger Hilt with Jetpack Compose Navigation.",
                    url: "https://developer.android.com/jetpack/compose/libraries#hilt-navigation",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🧰 KSP (Kotlin Symbol Processing)",
                    description: "Next-generation annotation processor for Kotlin, used by libraries like Room and Lyricist.",
                    url: "https://kotlinlang.org/docs/ksp-overview.html",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🌳 Bonsai Tree (Logging)",
                    description: "Simple and powerful structured logging framework for Compose.",
                    url: "https://github.com/adrielcafe/bonsai",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🍎 Cupertino UI",
                    description: "Jetpack Compose component library with iOS-styled Cupertino elements.",
                    url: "https://github.com/AlexZhukovich/Cupertino",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🌫️ Haze",
                    description: "Jetpack Compose backdrop blur and parallax effects library.",
                    url: "https://github.com/chrisbanes/haze",
                    icon: "/skills/check.svg"
                }
            ]

        },
        {
            name: "Game Launcher",
            description: "Turkmen Game Launcher using Compose for Desktop",
            images: [
                "/images/game/img3.png",
                "/images/game/img2.png",
                "/images/game/img9.png",
                "/images/game/img7.png",
                "/images/game/screen2.png",
                "/images/game/screen6.png",
            ],
            links: [
                {
                    url: "https://github.com/kotlin-compose-multiplatform/TmGameClient/tree/main",
                    title: "Source code",
                    image: "/icons/mdi_github.svg"
                }
            ],
            technologies: [
                {
                    name: "☕ Kotlin",
                    description: "Modern programming language for cross-platform development, including Compose Desktop apps.",
                    url: "https://kotlinlang.org/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🖥️ Compose for Desktop",
                    description: "Declarative UI framework from JetBrains for building desktop applications using Kotlin.",
                    url: "https://www.jetbrains.com/lp/compose/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🌐 Ktor",
                    description: "Asynchronous framework for building connected applications using Kotlin on client and server.",
                    url: "https://ktor.io/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🧭 Voyager",
                    description: "Multiplatform navigation library for Jetpack Compose and Compose Desktop.",
                    url: "https://github.com/adrielcafe/voyager",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🛠️ Multiplatform Settings",
                    description: "Kotlin Multiplatform library for saving key-value data across platforms including desktop.",
                    url: "https://github.com/russhwolf/multiplatform-settings",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🎨 Material 3",
                    description: "Modern design system from Google, implemented with Jetpack Compose UI components.",
                    url: "https://m3.material.io/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🌍 Lyricist",
                    description: "Localization library for Jetpack Compose that supports preview and runtime translations.",
                    url: "https://github.com/adrielcafe/lyricist",
                    icon: "/skills/check.svg"
                },
                {
                    name: "⚙️ GitHub Actions",
                    description: "CI/CD platform used to automate building MSI installers for Windows without requiring a Windows machine.",
                    url: "https://github.com/features/actions",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🦄 NestJS",
                    description: "Progressive Node.js framework for building efficient and scalable backend applications using TypeScript.",
                    url: "https://nestjs.com/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "⚛️ React TypeScript",
                    description: "Frontend framework used to build the admin panel with strong typing support.",
                    url: "https://react.dev/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🐘 PostgreSQL",
                    description: "Powerful open-source relational database used for storing structured data in the backend.",
                    url: "https://www.postgresql.org/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "📦 TypeORM",
                    description: "ORM for TypeScript and JavaScript that simplifies working with PostgreSQL in NestJS.",
                    url: "https://typeorm.io/",
                    icon: "/skills/check.svg"
                }
            ]

        },
        {
            name: "Wakant",
            description: "Welcome everyone! Are you looking to apply for jobs and build your career? Wakant is a\n" +
                "business and employment-focused online job platform. This platform allows jobseekers to\n" +
                "post their CVs and employers to post jobs via Recruitment agencies. Online job platform\n" +
                "Wakant aims to be one of the largest social network apps for online jobs. Here you can find\n" +
                "right jobs suiting your profession and skills.",
            images: [
                "/images/wakant.png",
                "/images/wakant/Screenshot 2025-06-02 at 18.02.05.png",
                "/images/wakant/Screenshot 2025-06-02 at 18.02.13.png",
                "/images/wakant/Screenshot 2025-06-02 at 18.02.18.png",
                "/images/wakant/Screenshot 2025-06-02 at 18.02.25.png",
                "/images/wakant/Screenshot 2025-06-02 at 18.02.41.png",
                "/images/wakant/Screenshot 2025-06-02 at 18.02.48.png",
                "/images/wakant/Screenshot 2025-06-02 at 18.02.54.png"
            ],
            links: [
                {
                    url: "http://wakant.com.tm/",
                    title: "Website",
                    image: "/icons/ph_link-bold.svg"
                }
            ],
            technologies: [
                {
                    name: "⚛️ React TS",
                    description: "",
                    url: "https://react.dev/",
                    icon: "/skills/check.svg",
                    percentage: 100
                },
                {
                    name: "⚛️ React Router",
                    description: "",
                    url: "https://react.dev/",
                    icon: "/skills/check.svg",
                    percentage: 100
                },
                {
                    name: "⚛️ MUI",
                    description: "",
                    url: "https://react.dev/",
                    icon: "/skills/check.svg",
                    percentage: 100
                }
            ]
        },
        {
            name: "Adybelli",
            description: "Shoes store (Deprecated Project)",
            images: [
                "/images/adybelli/screen-0.jpg",
                "/images/adybelli/screen-1.jpg",
                "/images/adybelli/screen-2.jpg",
                "/images/adybelli/screen-3.jpg",
                "/images/adybelli/screen-4.jpg",
                "/images/adybelli/screen-5.jpg",
                "/images/adybelli/screen-6.jpg",
            ],
            links: [
                {
                    url: "https://apkpure.com/adybelli/com.adybelli.android/download",
                    title: "Play store",
                    image: "/icons/playstore.svg"
                }
            ],
            technologies: []
        },
        {
            name: "Bootcamp Turkmenistan",
            description: "This is official website of Bootcamp Turkmenistan",
            images: [
                "/images/bootcamp/Screenshot 2025-06-02 at 17.47.00.png",
                "/images/bootcamp/Screenshot 2025-06-02 at 17.47.08.png",
                "/images/bootcamp/Screenshot 2025-06-02 at 17.47.17.png",
                "/images/bootcamp/Screenshot 2025-06-02 at 17.47.24.png",
                "/images/bootcamp/Screenshot 2025-06-02 at 17.47.31.png",
                "/images/bootcamp/Screenshot 2025-06-02 at 17.47.39.png"
            ],
            links: [
                {
                    url: "https://bootcamp-front.vercel.app/",
                    title: "Website",
                    image: "https://blind-and-deaf-client.vercel.app/images/Logo.svg"
                },
                {
                    url: "https://github.com/kotlin-compose-multiplatform/bootcamp-front",
                    title: "Source code",
                    image: "/icons/mdi_github.svg"
                }
            ],
            technologies: []
        },
        {
            name: "Visual Dictionary Desktop",
            description: "This is desktop app Visual Dictionary for architectures using c#",
            images: [
                "/images/dictionary/Screenshot 2025-06-02 at 17.42.30.png",
                "/images/dictionary/Screenshot 2025-06-02 at 17.42.37.png",
                "/images/dictionary/Screenshot 2025-06-02 at 17.42.49.png",
                "/images/dictionary/Screenshot 2025-06-02 at 17.42.55.png",
                "/images/dictionary/Screenshot 2025-06-02 at 17.43.02.png",
                "/images/dictionary/Screenshot 2025-06-02 at 17.43.15.png"
            ],
            links: [
                {
                    url: "https://drive.google.com/file/d/1ggRaiodtCY_FKmpWqCorecJibCqI7MJ1/view?usp=sharing",
                    title: "Video Demo",
                    image: "/icons/mdi_github.svg"
                }
            ],
            technologies: [
                {
                    name: "🧩 C#",
                    description: "Modern object-oriented programming language developed by Microsoft, used to build Windows Forms applications.",
                    url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🪟 Windows Forms",
                    description: "UI framework from Microsoft for building rich desktop applications on Windows using C#.",
                    url: "https://learn.microsoft.com/en-us/dotnet/desktop/winforms/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "📁 SQLite",
                    description: "Lightweight, embedded SQL database engine used for local data storage in desktop applications.",
                    url: "https://www.sqlite.org/index.html",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🗣️ Windows Text-to-Speech (System.Speech)",
                    description: "Built-in speech synthesis API in Windows, accessible via C# for converting text to spoken audio.",
                    url: "https://learn.microsoft.com/en-us/dotnet/api/system.speech.synthesis.speechsynthesizer",
                    icon: "/skills/check.svg"
                }
            ]
        },
        {
            name: "Food Delivery",
            description: "This app is food delivery system including client app, admin app, courier app and kitchen app. Developed with Firebase Firestore, java, xml. Courier gps tracking feature is awesome.",
            images: [
                "/images/food.png",
                "/images/delivery/Screenshot 2025-06-02 at 17.37.32.png",
                "/images/delivery/Screenshot 2025-06-02 at 17.38.03.png",
                "/images/delivery/Screenshot 2025-06-02 at 17.38.31.png",
                "/images/delivery/Screenshot 2025-06-02 at 17.38.46.png",
                "/images/delivery/Screenshot 2025-06-02 at 17.39.12.png",
                "/images/delivery/Screenshot 2025-06-02 at 17.39.33.png",
                "/images/delivery/Screenshot 2025-06-02 at 17.37.43.png",
                "/images/delivery/Screenshot 2025-06-02 at 17.38.20.png",
                "/images/delivery/Screenshot 2025-06-02 at 17.38.40.png",
                "/images/delivery/Screenshot 2025-06-02 at 17.39.04.png",
                "/images/delivery/Screenshot 2025-06-02 at 17.39.24.png"
            ],
            links: [
                {
                    url: "https://drive.google.com/file/d/1li4Yy8Ip779K_fNkm5KhEcywoyI6H_7n/view?usp=sharing",
                    title: "Video Demo",
                    image: "/icons/mdi_github.svg"
                }
            ],
            technologies: [
                {
                    name: "☕ Java",
                    description: "Object-oriented programming language used for building Android applications with robust architecture.",
                    url: "https://www.oracle.com/java/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🧱 XML",
                    description: "Markup language used in Android for defining UI layouts, styles, and configurations.",
                    url: "https://developer.android.com/guide/topics/ui/declaring-layout",
                    icon: "/skills/check.svg"
                },
                {
                    name: "📦 Firebase Firestore",
                    description: "Scalable NoSQL cloud database for storing and syncing app data in real time.",
                    url: "https://firebase.google.com/docs/firestore",
                    icon: "/skills/check.svg"
                },
                {
                    name: "📨 Firebase Cloud Messaging (FCM)",
                    description: "Service that enables sending push notifications and messages to Android devices.",
                    url: "https://firebase.google.com/docs/cloud-messaging",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🗺️ Google Maps SDK",
                    description: "Provides mapping capabilities in Android apps including markers, routes, and geolocation.",
                    url: "https://developers.google.com/maps/documentation/android-sdk",
                    icon: "/skills/check.svg"
                },
                {
                    name: "📁 SQLite",
                    description: "Lightweight, embedded relational database engine used for local data persistence on Android.",
                    url: "https://www.sqlite.org/index.html",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🎨 Material Design 2",
                    description: "Google’s design system for consistent, beautiful UI in Android apps using Material Components.",
                    url: "https://m2.material.io/",
                    icon: "/skills/check.svg"
                }
            ]

        },
        {
            name: "Turkmen Sites Search",
            description: "Search from turkmen sites using Gemini AI",
            images: [
                "/images/search_tm.png",
                "/images/Screenshot 2025-06-02 at 18.15.02.png",
            ],
            links: [
                {
                    url: "https://search-from-turkmen-sites.vercel.app/search",
                    title: "Website",
                    image: "/icons/ph_link-bold.svg"
                }
            ],
            technologies: [
                {
                    name: "⚛️ React",
                    description: "A JavaScript library for building fast and interactive user interfaces with reusable components.",
                    url: "https://reactjs.org/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🎨 Tailwind CSS",
                    description: "A utility-first CSS framework for rapidly building modern and responsive user interfaces.",
                    url: "https://tailwindcss.com/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🧠 Gemini API",
                    description: "Google's multimodal AI API for building intelligent apps with text, code, image, and chat capabilities.",
                    url: "https://ai.google.dev/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🔍 Google Search API",
                    description: "Enables programmatic access to Google search results for custom search and data integration.",
                    url: "https://developers.google.com/custom-search",
                    icon: "/skills/check.svg"
                }
            ]
        },
        {
            name: "Shopify cache store",
            description: "This project is a full-stack web application that integrates Shopify GraphQL API with Elasticsearch. It utilizes React with TypeScript for the frontend, NestJS with TypeScript for the backend, Redux Toolkit Query for state management, and Docker for containerization.",
            images: [
                "https://raw.githubusercontent.com/kotlin-compose-multiplatform/shopify-cache-store/main/img/splash.png",
            ],
            links: [
                {
                    url: "https://github.com/kotlin-compose-multiplatform/shopify-cache-store",
                    title: "Source code",
                    image: "/icons/mdi_github.svg"
                }
            ],
            technologies: [
                {
                    name: "🏗️ NestJS",
                    description: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications with TypeScript support.",
                    url: "https://nestjs.com/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "📝 TypeScript",
                    description: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
                    url: "https://www.typescriptlang.org/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "⚛️ React",
                    description: "A JavaScript library for building fast and interactive user interfaces with reusable components.",
                    url: "https://reactjs.org/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🐘 PostgreSQL",
                    description: "A powerful, open source object-relational database system with over 35 years of active development.",
                    url: "https://www.postgresql.org/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🗄️ TypeORM",
                    description: "An ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, and Electron platforms.",
                    url: "https://typeorm.io/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🛍️ Shopify GraphQL API",
                    description: "Shopify's powerful GraphQL API for building custom commerce experiences and managing store data.",
                    url: "https://shopify.dev/docs/api/admin-graphql",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🔍 Elasticsearch",
                    description: "A distributed, RESTful search and analytics engine capable of addressing a growing number of use cases.",
                    url: "https://www.elastic.co/elasticsearch/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🐳 Docker",
                    description: "A platform for developing, shipping, and running applications using containerization technology.",
                    url: "https://www.docker.com/",
                    icon: "/skills/check.svg"
                },
                {
                    name: "🐙 Docker Compose",
                    description: "A tool for defining and running multi-container Docker applications with a simple YAML configuration.",
                    url: "https://docs.docker.com/compose/",
                    icon: "/skills/check.svg"
                }
            ]
        },
        {
            name: "Blind & Deaf society of Turkmenistan",
            description: "This is official website of Blind & Deaf society of Turkmenistan",
            images: [
                "https://blind-and-deaf-client.vercel.app/images/Logo.svg",
            ],
            links: [
                {
                    url: "https://blind-and-deaf-client.vercel.app/",
                    title: "Website",
                    image: "https://blind-and-deaf-client.vercel.app/images/Logo.svg"
                },
                {
                    url: "https://github.com/kotlin-compose-multiplatform/blind_and_deaf_client",
                    title: "Source code",
                    image: "/icons/mdi_github.svg"
                }
            ],
            technologies: []
        },
        {
            name: "Saglykoty",
            description: "Pharmacy Landing page website",
            images: [
                "/images/saglyk.png",
            ],
            links: [
                {
                    url: "https://saglykoty.com.tm/",
                    title: "Website",
                    image: "/icons/ph_link-bold.svg"
                }
            ],
            technologies: []
        },
        {
            name: "Youtube parser",
            description: "Youtube channel details / video details and comments parser with pagination",
            images: [
                "https://variety.com/wp-content/uploads/2020/06/youtube-logo.png",
            ],
            links: [
                {
                    url: "https://github.com/kotlin-compose-multiplatform/parser",
                    title: "Source code",
                    image: "/icons/mdi_github.svg"
                }
            ],
            technologies: []
        },
        {
            name: "Kotlin Playground Telegram Bot",
            description: "Send kotlin code to this bot and it will compile your code and display results for you",
            images: [
                "/images/kotlinbot.png",
            ],
            links: [
                {
                    url: "https://t.me/kotlintm_bot",
                    title: "Use Bot",
                    image: "/icons/telegram.svg"
                },
                {
                    url: "https://github.com/kotlin-compose-multiplatform/kotlin_tm_bot",
                    title: "Source code",
                    image: "/icons/mdi_github.svg"
                }
            ],
            technologies: []
        },
    ];

    return {
        works
    }
}