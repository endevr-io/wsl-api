const { spawnCommandPromise, execPromise } = require('../child.js')

/**
 * Runs a bash command on the default distribution
 * @deprecated Microsoft lists this as deprecated and might not work in the future, but is the only way to run multiple or complex commands
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 *
 * const ls = await wsl.runBashCommand('ls')
 * console.log(ls)
 *
 * function callback (data) {
 *   console.log(data.toString())
 * }
 * await wsl.runBashCommand('apt update', true, callback)
 * ```
 * @param  {String} command  command to run, already is wrapped with ""
 * @param  {Boolean} [longProcess=false]  option if to run a process with a single response or a long running process with callbacks for the response
 * @param  {Function|Boolean} [stdoutCallback=false]  optional callback for the stdout event, `longProcess` must be true, returns a buffer
 * @param  {Function|Boolean} [stderrCallback=false]  optional callback for the stderr event, `longProcess` must be true, returns a buffer
 * @param  {Function|Boolean} [errorCallback=false]  optional callback for the error event, `longProcess` must be true, returns a buffer
 * @param  {Function|Boolean} [closeCallback=false]  optional callback for the close event, `longProcess` must be true, returns a close code
 * @return {Promise|String} returns promise from spawnBashPromise if longProcess is true or string from execPromise if longProcess is false
 */
exports.runBashCommand = async (command, longProcess = false, stdoutCallback = false, stderrCallback = false, errorCallback = false, closeCallback = false) => {
  if (typeof command !== 'string') throw new TypeError('parameter command must be string')
  if (typeof longProcess !== 'boolean') throw new TypeError('parameter longProcess must be boolean')
  try {
    if (longProcess) {
      await spawnCommandPromise('bash.exe', ['-c', `"${command}"`], stdoutCallback, stderrCallback, errorCallback, closeCallback)
    } else {
      return await execPromise(`bash.exe -c "${command}"`)
    }
  } catch (error) {
    throw new Error('unable to run command ' + command)
  }
}
