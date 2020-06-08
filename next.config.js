// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withLess = require("@zeit/next-less")

function removeMinimizeOptionFromCssLoaders(config) {
  console.warn(
    "HACK: Removing `minimize` option from `css-loader` entries in Webpack config"
  )
  config.module.rules.forEach((rule) => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach((u) => {
        if (u.loader === "css-loader" && u.options) {
          delete u.options.minimize
        }
      })
    }
  })
}

module.exports = withLess(
  withMDX({
    pageExtensions: ["ts", "tsx", "md", "mdx"],
    experimental: {
      basePath: process.env.BASE_PATH ? process.env.BASE_PATH : "",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
    webpack(config) {
      removeMinimizeOptionFromCssLoaders(config)
      return config
    },
  })
)
