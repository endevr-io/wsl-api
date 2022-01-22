const { execPromise } = require('../child.js')

/**
 * Sets the default distribution
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * await wsl.setDefaultDistribution('Ubuntu')
 * ```
 * @param  {String} distribution  distribution to set
 * @returns {Promise} resolves promise from execPromise
 * @throws {TypeError} throws if distribution is not a string
 * @throws {Error} throws if default distribution could not be set
 */
exports.setDefaultDistribution = async (distribution) => {
  if (typeof distribution !== 'string') throw new TypeError('parameter distribution must be string')
  try {
    await execPromise(`wsl.exe --set-default ${distribution}`)
  } catch (error) {
    throw new Error(`unable to set default distribution ${distribution}`)
  }
}
