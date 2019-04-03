'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://easy-mock_data.com/mock_data/5950a2419adc231f356a6636/vue-admin"',
})
