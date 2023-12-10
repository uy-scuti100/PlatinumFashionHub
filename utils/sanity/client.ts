import { createClient } from "next-sanity";

import createImageUrlBuilder from "@sanity/image-url";



export const client = createClient({

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "v2021-03-25",
    useCdn: true,
})

export const urlFor = (source: any) => createImageUrlBuilder(client).image(source)