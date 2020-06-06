// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    basePath: process.env.BASE_PATH ? process.env.BASE_PATH : "",
  },
})
