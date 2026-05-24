/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Disable Next.js's runtime image optimization layer (/_next/image).
    // Hostinger's shared Node.js plans don't have the headroom for sharp's
    // per-request transforms — when triggered, the worker is OOM-killed and
    // the entire app reverts to 503 until the process restarts.
    // With unoptimized:true the same <Image> tags render as plain <img>
    // pointing at /public/ assets, which Hostinger serves directly off its
    // static layer (proven 200 in our probes).
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
