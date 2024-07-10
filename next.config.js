/** @type {import('next').NextConfig} */

module.exports = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: `https://centrum-kangurek.pl`,
          },
        ],
      },
    ];
  },
};
