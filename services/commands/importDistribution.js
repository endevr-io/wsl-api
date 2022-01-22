const { execPromise } = require('../child.js')

/**
 * Imports a new distribution to a location from a path/file name
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * await wsl.importDistribution('Custom', 'C:\\endevr', 'C:\\endevr\\Ubuntu.tar.gz')
 * ```
 * @param  {String} distribution  distribution to import
 * @param  {String} location  folder path to import to
 * @param  {String} path  path/file name to import from
 * @return {Promise} resolves promise from execPromise
 * @throws {TypeError} throws if distribution is not a string or location is not a string or path is not a string
 * @throws {Error} throws if distribution could not be imported
 */
exports.importDistribution = async (distribution, location, path) => {
  if (typeof distribution !== 'string') throw new TypeError('parameter distribution must be string')
  if (typeof location !== 'string') throw new TypeError('parameter location must be string')
  if (typeof path !== 'string') throw new TypeError('parameter path must be string')
  try {
    await execPromise(`wsl.exe --import ${distribution} ${location} ${path}`)
  } catch (error) {
    throw new Error(`unable to import ${distribution} to ${location} from ${path}`)
  }
}
