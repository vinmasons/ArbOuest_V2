/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    // Used to guard against accidentally leaking SANITY_API_READ_TOKEN to the browser
    taint: true, nextScriptWorkers: true,
  },
  logging: {
    fetches: { fullUrl: false },
  },
  images: {
    remotePatterns: [
      {
        hostname: 'plus.unsplash.com',
      },
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
};
