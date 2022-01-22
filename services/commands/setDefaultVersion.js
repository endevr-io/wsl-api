const { execPromise } = require('../child.js')

/**
 * Sets the default WSL version
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * await wsl.setDefaultVersion(2)
 * ```
 * @param  {Number} version  version to set
 * @returns {Promise} resolves promise from execPromise
 * @throws {TypeError} throws if version is not a number
 * @throws {Error} throws if version is not 1 or 2
 * @throws {Error} throws if default version could not be set
 */
exports.setDefaultVersion = async (version) => {
  if (typeof version !== 'number') throw new TypeError('parameter version must be number')
  if (![1, 2].includes(version)) throw new Error('parameter version must be 1 or 2')
  try {
    await execPromise(`wsl.exe --set-default-version ${version}`)
  } catch (error) {
    throw new Error(`unable to set default version ${version}`)
  }
}
