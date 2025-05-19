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
            name: "Balary",
            description: "Balary online supermarket has more than 50 categories of goods. Seasonal Vegetables, Fruits, Home Goods and much more! And if you think you might forget something, you can save your personal list of purchases with our phone app or website membership and use them on your next order!",
            images: [
                "https://play-lh.googleusercontent.com/hlyAkDVTL6lR6MghHdQljsfzwcRyPZIxvxM6EdjubZ0C3MNVzS5M0Xlg5FB84fVG8wc=w1052-h592",
                "https://play-lh.googleusercontent.com/oCQgU3kxH1RYU9vObT_7Ouvt6d7uqNYVsfHP2nWGyQ2ZFloNBbGXvXr_vf0BYwC_MIE=w1052-h592",
                "https://play-lh.googleusercontent.com/Yih2465vsAerHj9OSiUgNWH3y5Qh2ufMZfrcCr5FTIodsmoIMkt9E5Bcf3TBw9pt-2M=w1052-h592",
                "https://play-lh.googleusercontent.com/9vTo7CYK9_L1v8m8I1BDKJUp_fUYS4k-2cWPZQXVDTG1NmGrianGxh9Kb_P4PBsXUQ=w1052-h592",
                "https://play-lh.googleusercontent.com/QCqWSUcS5ELVOqm-9xgPz_3aXwyZIotxHvRDPXtkxp1QabtdUT6T0l5aQgP8gpi3CA=w1052-h592",
                "https://play-lh.googleusercontent.com/WciqH_rb7N99caiYkaCxYqVi3RahF3Gdl0zOEqNju6XWhilL4-8z9XAiKLhTnqF3fC4w=w1052-h592"
            ],
            links: [
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
                "https://play-lh.googleusercontent.com/fw35PgADrzkR3qa9n3-X4-C-mKcH7s9FEkC-TtWZJnHcnogl7zfj7-166l1Km8HrQso=w1052-h592",
                "https://play-lh.googleusercontent.com/cDM5XF2H4NkQX4SdzCs3WInyCHrmFaYXnLSpp6UZFV3H-6Y2UHLE2p_yDsavDDrOQto=w1052-h592",
                "https://play-lh.googleusercontent.com/06Bfm-xZODDspqoBJ3bn7Ret2Id-PtZn0S3U92CPvKtfh2Y1aw909hhjxlMo6KVynrU=w1052-h592",
                "https://play-lh.googleusercontent.com/sPWH1BCIgR--WhU1NXS2zYVAzicO9mUqNXVRj-YjTcCSUUUYBTOhYUVW1y6o4xLcBuga=w1052-h592",
                "https://play-lh.googleusercontent.com/4kN5lAYz6swqbzeQ0Zg_zIyeUJ44IAxWO4A-NLZa2D3j_7H0psU5VW2pk0DvDmVusg=w1052-h592",
                "https://play-lh.googleusercontent.com/KBaa4rhS1D10uhUcDDhOUhV49VgFoksekPMt2Ll33_k36Hh9CcwxHgvzvUuTnhabYQ4=w1052-h592"
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
                "https://play-lh.googleusercontent.com/_K-lF-ZGvGTRMcYw-KG-V-taWhZIr0959f7w3xVCoUQdOA126VUuvhBuVBVINNo4KDk=w1052-h592",
                "https://play-lh.googleusercontent.com/kuHeaeVOSk5-TWvEUheCb3rgw_9i07GAo0lmJP8POPolUhIwpj8R728jyvXD8eKWCR4=w1052-h592",
                "https://play-lh.googleusercontent.com/TU97sIS2w6QK4GQ_9kqTT9NekS8aRHGDARcSfllIjnfL3MnQ4LvmCLanR-cnwj_B2ls=w1052-h592",
                "https://play-lh.googleusercontent.com/GFe6LDv5UN-RCA9fHkKFuHHf3BhrGjZliYcTEQwJFbhYsy0TjaqgtUG1QcG-HE9ZruM=w1052-h592",
                "https://play-lh.googleusercontent.com/qWXc9v4edq7aOqNptAdrSElNokbQCiLiv8LGlmfSDXijNliXJcfTXcx94W_lR_MR4BA=w1052-h592",
                "https://play-lh.googleusercontent.com/MEh5zye7hhNkdU68KLd4h94_cbEOVfM1sqEYxHtYP9BHh--6uYzEtEBwyw3pfVOzyFc=w1052-h592",
                "https://play-lh.googleusercontent.com/VRJ0AvIWBdzbxwcX4lutrlTjiBOlVFk2iY8YDbYff5mDz6tnKy6Jpykcm6IX15Pcnvw0=w1052-h592"
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
                "https://play-lh.googleusercontent.com/R7YqxyGQrnda56-XcRz4uOIr5NcvUmR3NKntZdPwwSJdImbdfDGSj-L8e72gLoLFwWV4=w1052-h592",
                "https://play-lh.googleusercontent.com/SbtPAtoqzzAXXJx51-jHGmnMkiVdj_nNxBiScME_2gQjFPCwtGsnFasjgaicypJIeKyW=w1052-h592",
                "https://play-lh.googleusercontent.com/GR3uejB6f56q7jnMhI6FZ1mqFoTee9N2yNnHASrG2h76wfWH0GLgQUlAKJgfIK4hExM=w1052-h592",
                "https://play-lh.googleusercontent.com/J5ZAen1-fZjJcQMj2kzdt4cjyDmXVFcUiA0yjG72FDtOr9VXvnaC2GULbKxczWBeW44=w1052-h592",
                "https://play-lh.googleusercontent.com/3SCwyr8FGhivZ5AFAVjsp_7xbAope10owzcqh4DNP89nPzxLxuZdGy8OvUTUB4LM6-g=w1052-h592",
                "https://play-lh.googleusercontent.com/-La7z0bO8ufJVGB4uDmbIsbMBbnp_muG7LeKALSyZ5DPvOFFTQKWiJurjdFZgL8Y4UTx=w1052-h592",
                "https://play-lh.googleusercontent.com/U00zEr-uyl6-ZngWtLAnaM6VH9PibS1vRv2VxFR2RvS9L7KegoZeYbw4eDEOuO4PB08=w1052-h592"
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
            name: "KomekciTM",
            description: "Discover \"Komekchi TM\" – Turkmenistan's premier marketplace platform! Buy, sell, and connect with ease. Find everything you need, from local products to unique services, all in one place. Join the Komekchi TM community today and experience seamless transactions and endless opportunities.",
            images: [
                "https://play-lh.googleusercontent.com/BFIzkC0wigBZ0y1r-wjK3Hb0rp4tpl8fi-dtX3YuXbB7gvUhwrdN4CIJL3WuPPXI1UA=w1052-h592",
                "https://play-lh.googleusercontent.com/z3rl9WSz5qOT7ftAe94x-_Kd1JxOr0efg8CvdNMt-X7cGBFRQscQUhWQ8o_OORpBPQ=w1052-h592",
                "https://play-lh.googleusercontent.com/dZQQAOpR_ecbYa_wKVLxaXEkHxFxtRrowwJI1g-KG2WBv7o32pPYT9PRzmhQbMTclhU=w1052-h592"
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
            name: "Adybelli",
            description: "Shoes store (Deprecated Project)",
            images: [
                "https://image.winudf.com/v2/image1/Y29tLmFkeWJlbGxpLmFuZHJvaWRfaWNvbl8xNjUxNjgzNjcyXzA2NQ/icon.png?w=212&fakeurl=1",
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
            name: "Wakant",
            description: "Welcome everyone! Are you looking to apply for jobs and build your career? Wakant is a\n" +
                "business and employment-focused online job platform. This platform allows jobseekers to\n" +
                "post their CVs and employers to post jobs via Recruitment agencies. Online job platform\n" +
                "Wakant aims to be one of the largest social network apps for online jobs. Here you can find\n" +
                "right jobs suiting your profession and skills.",
            images: [
                "/images/wakant.png",
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
            name: "Turkmen Sites Search",
            description: "Search from turkmen sites using Gemini AI",
            images: [
                "/images/search_tm.png",
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
            name: "Game Launcher",
            description: "Turkmen Game Launcher using Compose for Desktop",
            images: [
                "https://raw.githubusercontent.com/kotlin-compose-multiplatform/TmGameClient/main/screens/mac/img3.png",
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
            name: "Bootcamp Turkmenistan",
            description: "This is official website of Bootcamp Turkmenistan",
            images: [
                "https://bootcamp-front.vercel.app/static/media/womens.05ce5a8b6f15a56184f1.png",
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
                "/icons/visualdic.png",
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
            ],
            links: [
                {
                    url: "https://drive.google.com/file/d/1li4Yy8Ip779K_fNkm5KhEcywoyI6H_7n/view?usp=sharing",
                    title: "Video Demo",
                    image: "/icons/mdi_github.svg"
                }
            ]
        },
    ];

    return {
        works
    }
}