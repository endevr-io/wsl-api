const { execPromise } = require('../child.js')

/**
 * Mounts a disk to all distributions
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * await wsl.mount('\\\\.\\PHYSICALDRIVE3', 'F', false, null, null, 'data=ordered')
 * ```
 * @param  {String} path  disk path to mount
 * @param  {String|Null} [name=null]  option to mount with name
 * @param  {Boolean} [bare=false]  option to attach the drive but not mount it
 * @param  {String|Null} [type=null]  option to specify the filesystem type
 * @param  {Number|Null} [partition=null]  option to specify the partition ID
 * @param  {String|Null} [options=null]  option with the mounting options, they are already encased with ""
 * @return {Promise} resolves promise from execPromise
 * @throws {TypeError} throws if path is not a string, name is not string or null, bare is not boolean, type is not string or null, partition is not number or null, or options is not a string or null
 * @throws {Error} throws if disk could not be mounted
 */
exports.mount = async (path, name = null, bare = false, type = null, partition = null, options = null) => {
  if (typeof path !== 'string') throw new TypeError('parameter path must be string')
  if (typeof name !== 'string' && name !== null) throw new TypeError('parameter name must be string or null')
  if (typeof bare !== 'boolean') throw new TypeError('parameter bare must be boolean')
  if (typeof type !== 'string' && type !== null) throw new TypeError('parameter type must be string or null')
  if (typeof partition !== 'number' && partition !== null) throw new TypeError('parameter partition must be number or null')
  if (typeof options !== 'string' && partition !== null) throw new TypeError('parameter options must be string or null')
  let command = `wsl.exe --mount ${path}`
  try {
    if (name) {
      command += ` --name ${name}`
    }
    if (bare) {
      command += ' --bare'
    }
    if (type) {
      command += ` --type ${type}`
    }
    if (partition) {
      command += ` --partition ${partition}`
    }
    if (options) {
      command += ` --options "${partition}"`
    }
    await execPromise(command)
  } catch (error) {
    throw new Error(`unable to mount with ${command}`)
  }
}
