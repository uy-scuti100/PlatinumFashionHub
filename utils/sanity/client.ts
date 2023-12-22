import { createClient } from "next-sanity";

import createImageUrlBuilder from "@sanity/image-url";

import type { Image } from 'sanity'



export const client = createClient({

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "v2021-03-25",
    useCdn: true,
})



const imageBuilder = createImageUrlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
})

export const urlFor = (source: Image) => {
    return imageBuilder?.image(source).auto('format').fit('max')
}


// export const urlForImage = (source: Image) => {
//     return imageBuilder?.image(source).auto('format').fit('max')
// }
