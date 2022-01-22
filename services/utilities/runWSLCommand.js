const { spawnCommandPromise, execPromise } = require('../child.js')

/**
 * Runs a command on the default or specified distribution. Must be a simple single command. Use `runBashCommand` for multiple or complex commands or run a bash file with `runWSLFile` or `runBashFile`
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 *
 * const ls = await wsl.runWSLCommand('ls', 'Ubuntu', 'endevr')
 * console.log(ls)
 *
 * function callback (data) {
 *   console.log(data.toString())
 * }
 * await wsl.runWSLCommand('apt update', 'Ubuntu', 'endevr', true, callback)
 * ```
 * @param  {String} command  command to run, already is wrapped with ""
 * @param  {String|Null} [distribution=null]  option to specify the distribution or use the default distribution
 * @param  {String|Null} [user=null]  option to specify the user or use the default user
 * @param  {Boolean} [longProcess=false]  option if to run a process with a single response or a long running process with callbacks for the response
 * @param  {Function|Boolean} [stdoutCallback=false]  optional callback for the stdout event, returns a buffer
 * @param  {Function|Boolean} [stderrCallback=false]  optional callback for the stderr event, returns a buffer
 * @param  {Function|Boolean} [errorCallback=false]  optional callback for the error event, returns a buffer
 * @param  {Function|Boolean} [closeCallback=false]  optional callback for the close event, returns a close code
 * @return {Promise|String} returns promise from spawnBashPromise if longProcess is true or string from execPromise if longProcess is false
 */
exports.runWSLCommand = async (command, distribution = null, user = null, longProcess = false, stdoutCallback = false, stderrCallback = false, errorCallback = false, closeCallback = false) => {
  if (typeof command !== 'string') throw new TypeError('parameter command must be string')
  if (typeof distribution !== 'string' && distribution !== null) throw new TypeError('parameter distribution must be string or null')
  if (typeof user !== 'string' && user !== null) throw new TypeError('parameter user must be string or null')
  if (typeof longProcess !== 'boolean') throw new TypeError('parameter longProcess must be boolean')
  try {
    if (longProcess) {
      const args = []
      if (distribution) {
        args.push('--distribution', distribution)
      }
      if (user) {
        args.push('--user', user)
      }
      args.push('--', command)
      await spawnCommandPromise('wsl.exe', args, stdoutCallback, stderrCallback, errorCallback, closeCallback)
    } else {
      let cmd = 'wsl.exe'
      if (distribution) {
        cmd += ` --distribution ${distribution}`
      }
      if (user) {
        cmd += ` --user ${user}`
      }
      cmd += ` -- ${command}`
      return await execPromise(cmd)
    }
  } catch (error) {
    throw new Error('unable to run ' + (distribution || 'default distribution') + (user ? ' with user ' + user : '') + ' with command ' + command)
  }
}
