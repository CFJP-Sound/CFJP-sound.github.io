export const SYMBOLS = ["〄", "‡", "〤", "⌭", "⌮", "〆", "⌬", "༄"];
export const PROJECTS = [
    {
        name: "Leo's Delusion",
        previewImg: "imgs/LD.jpg",
        description: "Leo's Delusion is the name under which the duo realizes their passion for music production. Blending a variety of influences from hip-hop and electronic, it's the soundtrack of a video game yet to be.",
        works: [
            {
                description: "A cinematic, rough, and punchy glimpse into the post-apocalyptic.",
                externalLocation: "https://www.youtube.com/embed/videoseries?list=PL1Lgz0XMNSE0eBvGx-cHKNDxZoe9InZ7V",
                type: "video",
                title: "2 0 X X"
            },
            {
                description: "The genesis of our collaboration, and no better place to dive in.",
                externalLocation: "https://www.youtube.com/embed/videoseries?list=PL1Lgz0XMNSE3ZZAeXMTAd75JRIRQz7o5A",
                type: "video",
                title: "Chromaglyphs"
            }
        ]
    },
    {
        name: "Rescored",
        previewImg: "imgs/RescoredLogoForSite.png",
        description: "Rescored provides original scores and in-house editing to select movie scenes, painting the films' moments in new colors.",
        works: [
            {
                description: "An eerie conspiracy looms...",
                externalLocation: "https://player.vimeo.com/video/446263688",
                type: "video",
                title: "Rescored: Flightplan"
            },
            {
                description: "You have five minutes.",
                externalLocation: "https://player.vimeo.com/video/446336266",
                type: "video",
                title: "Rescored: Drive"
            },
            {
                description: "Not all hearts beat.",
                externalLocation: "https://player.vimeo.com/video/446336431",
                type: "video",
                title: "Rescored: Sebastian's Voodoo"
            }
        ]
    }
];

// Project  = {
//     name: string
//     items: array of json items
//     description: string
//     works: array of ProjectItems
// }

// ProjectItem = {
//     description: string
//     externalLocation: string, url
//     type: [video, img]
//     title: string, required
//   }
