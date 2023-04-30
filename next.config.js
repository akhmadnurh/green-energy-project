const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "static.wixstatic.com"],
  },
  async rewrites() {
    return [
      {
        source: "/blog/newsgame",
        destination: "/static/newsgame.html",
      },
    ];
  },
};

module.exports = nextConfig;
