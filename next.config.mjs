/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/Property/Property_type/:path*",
        destination: "/Projects",
        permanent: true,
      },
      {
        source: "/Property/Property_type",
        destination: "/Projects",
        permanent: true,
      },
      {
        source: "/Property/:id",
        destination: "/Projects/:id",
        permanent: true,
      },
      {
        source: "/Property",
        destination: "/Projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
