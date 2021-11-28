const withPWA = require('next-pwa')
const path = require('path')
const runtimeCaching = require("next-pwa/cache");
require('dotenv').config()

  module.exports = withPWA({
env : {
  API_URL: process.env.API_URL

},
pwa: {
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest\.json$/, /_middleware\.js$/],
  disable: process.env.NODE_ENV === 'development',
},

publicRuntimeConfig :{

  API_URL: process.env.API_URL
  
},
swcMinify: true,

images: {
  domains: ['res.cloudinary.com'],
},

    reactStrictMode: true,
    webpack: config => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')

        return config
    }
  })