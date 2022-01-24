const { spawnCommandPromise, execPromise } = require('../child.js')

/**
 * Runs a bash file on the default or specified istribution
 * > :warning: **Make sure that the file uses Linux line endings (LF) and NOT Windows line endings (CRLF)**
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 *
 * const short = await wsl.runWSLFile('/mnt/c/shortprocess.sh', 'Ubuntu', 'endevr')
 * console.log(short)
 *
 * function callback (data) {
 *   console.log(data.toString())
 * }
 * await wsl.runWSLFile('/mnt/c/longprocess.sh', 'Ubuntu', 'endevr', true, callback)
 * ```
 * @param  {String} path  path to the file in WSL/Linux format, ie `/mnt/c/Path/To/File` or `/home/user/path/to/file`
 * @param  {String|Null} [distribution=null]  option to specify the distribution or use the default distribution
 * @param  {String|Null} [user=null]  option to specify the user or use the default user
 * @param  {Boolean} [longProcess=false]  option if to run a process with a single response or a long running process with callbacks for the response
 * @param  {Function|Boolean} [stdoutCallback=false]  optional callback for the stdout event, returns a buffer
 * @param  {Function|Boolean} [stderrCallback=false]  optional callback for the stderr event, returns a buffer
 * @param  {Function|Boolean} [errorCallback=false]  optional callback for the error event, returns a buffer
 * @param  {Function|Boolean} [closeCallback=false]  optional callback for the close event, returns a close code
 * @return {Promise|String} returns promise from spawnBashPromise if longProcess is true or string from execPromise if longProcess is false
 */
exports.runWSLFile = async (path, distribution = null, user = null, longProcess = false, stdoutCallback = false, stderrCallback = false, errorCallback = false, closeCallback = false) => {
  if (typeof path !== 'string') throw new TypeError('parameter path must be string')
  if (typeof distribution !== 'string' && distribution !== null) throw new TypeError('parameter distribution must be string or null')
  if (typeof user !== 'string' && user !== null) throw new TypeError('parameter user must be string or null')
  try {
    if (longProcess) {
      const args = []
      if (distribution) {
        args.push('--distribution', distribution)
      }
      if (user) {
        args.push('--user', user)
      }
      args.push('--', 'bash', path)
      await spawnCommandPromise('wsl.exe', args, stdoutCallback, stderrCallback, errorCallback, closeCallback)
    } else {
      let cmd = 'wsl.exe'
      if (distribution) {
        cmd += ` --distribution ${distribution}`
      }
      if (user) {
        cmd += ` --user ${user}`
      }
      cmd += ` -- bash ${path}`
      return await execPromise(cmd)
    }
  } catch (error) {
    throw new Error('unable to run ' + (distribution || 'default distribution') + (user ? ' with user ' + user : '') + ' with file ' + path)
  }
}
