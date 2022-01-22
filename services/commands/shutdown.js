const { execPromise } = require('../child.js')

/**
 * Shutdown all distributions
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * await wsl.shutdown()
 * ```
 * @returns {Promise} resolves promise from execPromise
 * @throws {Error} throws if distributions could not be shutdown
 */
exports.shutdown = async () => {
  try {
    await execPromise('wsl.exe --shutdown')
  } catch (error) {
    throw new Error('unable to shutdown distributions')
  }
}
