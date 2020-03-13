/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/

const { resolve } = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve.alias['~'] = resolve(__dirname, 'src')
    return config
  }
}
