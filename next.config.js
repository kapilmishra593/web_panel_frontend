/** @type {import('next').NextConfig} */
const path = require('path')
var importer = require("node-sass-importer")
const nextConfig = {
    reactStrictMode: false,
    // webpackDevMiddleware: config => {
    //   config.watchOptions = {
    //     poll: 1000,
    //     aggregateTimeout: 300
    //   }
    //   return config
    // },
    sassOptions: {
      includePaths: [path.join(__dirname, 'src')],
      prependData: `@import "app/variables.scss";`,
    },
    // sassConfig: {
    //   importer: importer
    // },
    images: {
      domains: [],
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    trailingSlash: true,
}

module.exports = nextConfig