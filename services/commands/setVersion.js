const { execPromise } = require('../child.js')

/**
 * Sets the WSL version of a distribution
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * await wsl.setVersion('Ubuntu', 2)
 * ```
 * @param  {String} distribution  distribution to set
 * @param  {Number} version  version to set
 * @returns {Promise} resolves promise from execPromise
 * @throws {TypeError} throws if distribution is not a string
 * @throws {TypeError} throws if version is not a number
 * @throws {Error} throws if version is not 1 or 2
 * @throws {Error} throws if distribution version could not be set
 */
exports.setVersion = async (distribution, version) => {
  if (typeof distribution !== 'string') throw new TypeError('parameter distribution must be string')
  if (typeof version !== 'number') throw new TypeError('parameter version must be number')
  if (![1, 2].includes(version)) throw new Error('parameter version must be 1 or 2')
  try {
    await execPromise(`wsl.exe --set-version ${distribution} ${version}`)
  } catch (error) {
    throw new Error(`unable to set ${distribution} to version ${version}`)
  }
}
