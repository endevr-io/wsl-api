const { spawnCommandPromise, execPromise } = require('../child.js')

/**
 * Runs a bash file on the default distribution
 * > :warning: **Make sure that the file uses Linux line endings (LF) and NOT Windows line endings (CRLF)**
 * @deprecated Microsoft lists this as deprecated and might not work in the future
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 *
 * const short = await wsl.runBashFile('/mnt/c/shortprocess.sh')
 * console.log(short)
 *
 * function callback (data) {
 *   console.log(data.toString())
 * }
 * await wsl.runBashFile('/mnt/c/longprocess.sh', true, callback)
 * ```
 * @param  {String} path  path to the file in WSL/Linux format, ie `/mnt/c/Path/To/File` or `/home/user/path/to/file`
 * @param  {Boolean} [longProcess=false]  option if to run a process with a single response or a long running process with callbacks for the response
 * @param  {Function|Boolean} [stdoutCallback=false]  optional callback for the stdout event, returns a buffer
 * @param  {Function|Boolean} [stderrCallback=false]  optional callback for the stderr event, returns a buffer
 * @param  {Function|Boolean} [errorCallback=false]  optional callback for the error event, returns a buffer
 * @param  {Function|Boolean} [closeCallback=false]  optional callback for the close event, returns a close code
 * @return {Promise|String} returns promise from spawnBashPromise if longProcess is true or string from execPromise if longProcess is false
 */
exports.runBashFile = async (path, longProcess = false, stdoutCallback = false, stderrCallback = false, errorCallback = false, closeCallback = false) => {
  if (typeof path !== 'string') throw new TypeError('parameter path must be string')
  if (typeof longProcess !== 'boolean') throw new TypeError('parameter longProcess must be boolean')
  try {
    if (longProcess) {
      await spawnCommandPromise('bash.exe', [`${path}`], stdoutCallback, stderrCallback, errorCallback, closeCallback)
    } else {
      return await execPromise(`bash.exe "${path}"`)
    }
  } catch (error) {
    throw new Error('unable to run file ' + path)
  }
}
