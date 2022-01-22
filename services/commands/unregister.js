const { execPromise } = require('../child.js')

/**
 * Unregisters or uninstalls specified distribution
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * await wsl.unregister('Ubuntu')
 * ```
 * @param  {String} distribution  distribution to unregister
 * @returns {Promise} resolves promise from execPromise
 * @throws {TypeError} throws if distribution is not a string
 * @throws {Error} throws if distribution could not be unregistered
 */
exports.unregister = async (distribution) => {
  if (typeof distribution !== 'string') throw new TypeError('parameter distribution must be string')
  try {
    await execPromise(`wsl.exe --unregister ${distribution}`)
  } catch (error) {
    throw new Error(`unable to unregister ${distribution}`)
  }
}
