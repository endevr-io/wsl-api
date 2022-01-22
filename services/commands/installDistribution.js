const { execPromise } = require('../child.js')

/**
 * Install official distribution
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * await wsl.installDistribution('Ubuntu')
 * ```
 * @param  {String} distribution  distribution to install
 * @returns {Promise} resolves promise from execPromise
 * @throws {TypeError} throws if distribution is not a string
 * @throws {Error} throws if distribution could not be installed
 */
exports.installDistribution = async (distribution) => {
  if (typeof distribution !== 'string') throw new TypeError('parameter distribution must be string')
  try {
    await execPromise(`wsl.exe --install --distribution ${distribution}`)
  } catch (error) {
    throw new Error(`unable to install ${distribution}`)
  }
}
