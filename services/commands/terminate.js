const { execPromise } = require('../child.js')

/**
 * Terminates or stops specified distribution
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * await wsl.terminate('Ubuntu')
 * ```
 * @param  {String} distribution  distribution to terminate
 * @returns {Promise} resolves promise from execPromise
 * @throws {TypeError} throws if distribution is not a string
 * @throws {Error} throws if distribution could not be terminated
 */
exports.terminate = async (distribution) => {
  if (typeof distribution !== 'string') throw new TypeError('parameter distribution must be string')
  try {
    await execPromise(`wsl.exe --terminate ${distribution}`)
  } catch (error) {
    throw new Error(`unable to terminate ${distribution}`)
  }
}
