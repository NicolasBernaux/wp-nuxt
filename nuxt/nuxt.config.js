import axios from 'axios'
import pkg from './package'
import path from 'path'
require('dotenv').config({ path: path.resolve(__dirname, '../.env')})

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description || process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'

  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/dotenv', { path: path.resolve(__dirname, '../.env')}]
  ],

  axios: {
    // proxyHeaders: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.node = {
        fs: 'empty'
        }
    }
  },
  generate: {
    routes: () => {
      return axios
        .get(`${process.env.API_DOMAIN}/wp-json/rest-api/v1/listing`)
        .then(({ data }) => data)
    }
  }
}
