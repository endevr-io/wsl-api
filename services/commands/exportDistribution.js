const { execPromise } = require('../child.js')

/**
 * Exports a specified distribution to a path/file name
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * await wsl.exportDistribution('Ubuntu', 'C:\\endevr\\Ubuntu.tar.gz')
 * ```
 * @param  {String} distribution  distribution to export
 * @param  {String} path  path/file name to export to
 * @return {Promise} resolves promise from execPromise
 * @throws {TypeError} throws if distribution is not a string or path is not a string
 * @throws {Error} throws if distribution could not be exported
 */
exports.exportDistribution = async (distribution, path) => {
  if (typeof distribution !== 'string') throw new TypeError('parameter distribution must be string')
  if (typeof path !== 'string') throw new TypeError('parameter path must be string')
  try {
    await execPromise(`wsl.exe --export ${distribution} ${path}`)
  } catch (error) {
    throw new Error(`unable to export ${distribution}`)
  }
}
