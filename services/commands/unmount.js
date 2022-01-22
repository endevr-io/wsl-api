const { execPromise } = require('../child.js')

/**
 * Unmounts a disk to all distributions
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * await wsl.unmount('\\\\.\\PHYSICALDRIVE3')
 * ```
 * @param  {String} path  disk path to unmount
 * @return {Promise} resolves promise from execPromise
 * @throws {TypeError} throws if path is not a string
 * @throws {Error} throws if disk could not be unmounted
 */
exports.unmount = async (path) => {
  if (typeof path !== 'string') throw new TypeError('parameter path must be string')
  try {
    await execPromise(`wsl.exe --unmount ${path}`)
  } catch (error) {
    throw new Error(`unable to unmount ${path}`)
  }
}
