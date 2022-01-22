const { execPromise } = require('../child.js')

/**
 * Update the WSL kernel
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * await wsl.update()
 * ```
 * @param  {Boolean} [rollback=false]  option to rollback to previous version
 * @returns {Promise} resolves promise from execPromise
 * @throws {TypeError} throws if rollback is not a boolean
 * @throws {Error} throws if unable to update WSL
 */
exports.update = async (rollback = false) => {
  if (typeof rollback !== 'boolean') throw new TypeError('parameter rollback must be boolean')
  try {
    if (rollback) {
      await execPromise('wsl.exe --update rollback')
    } else {
      await execPromise('wsl.exe --update')
    }
  } catch (error) {
    throw new Error('unable to update WSL')
  }
}
