import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */
const config = {
   // your Next.js config
   images: {
      domains: ["cdn.sanity.io"],
   },
};

export default withPlaiceholder(config);
