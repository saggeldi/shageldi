export interface WorkLink {
    url: string;
    title: string;
    image: string;
}

export interface MyWork {
    name: string;
    description: string;
    images: string[];
    links: WorkLink[];
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
            links: []
        },
        {
            name: "Operator",
            description: "This project helps operators on any kind of service company, customer call to operator and customer full information and history shows on the operator computer",
            images: [
                "/images/operator/Screenshot 2025-06-02 at 16.53.43.png",
                "/images/operator/Screenshot 2025-06-02 at 16.54.00.png",
                "/images/operator/Screenshot 2025-06-02 at 16.54.21.png",
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
            links: []
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
        },
    ];

    return {
        works
    }
}