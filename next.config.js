/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/

const { resolve } = require('path')
const withOffline = require('next-offline')

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['~'] = resolve(__dirname, 'src')
    return config
  }
}

module.exports = withOffline(nextConfig)
