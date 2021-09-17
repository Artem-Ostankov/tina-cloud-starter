const withSvgr = require("next-svgr");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(withSvgr({
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/",
      },
    ];
  },
}));
