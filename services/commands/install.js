const { execPromise } = require('../child.js')

/**
 * Install WSL and Ubuntu
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * await wsl.install()
 * ```
 * @returns {Promise} resolves promise from execPromise
 * @throws {Error} throws if WSL and Ubuntu could not be installed
 */
exports.install = async () => {
  try {
    await execPromise('wsl.exe --install')
  } catch (error) {
    throw new Error('unable to install WSL and Ubuntu')
  }
}
