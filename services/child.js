const { exec, spawn } = require('child_process')

/**
 * Child service module
 * @module services/child
 */

/**
 * Promise wrapper for exec
 * @param  {String} command  string to run with exec
 * @returns {Promise} resolves on stdout or rejects on error or stderr
 * @throws {TypeError} throws if command is not a string
 */
exports.execPromise = (command) => {
  if (typeof command !== 'string') throw new TypeError('parameter command must be string')
  return new Promise((resolve, reject) => {
    exec(command, { encoding: 'utf8' }, (error, stdout, stderr) => {
      if (error) return reject(error)
      if (stderr) return reject(stderr)
      resolve(stdout)
    })
  })
}

/**
 * Promise wrapper for spawn with optional event callbacks
 * @param  {String} command  string of the command to run
 * @param  {Array} args  array of arguments
 * @callback stdoutCallback  callback on event data of stdout
 * @callback stderrCallback  callback on event data of stderr
 * @callback errorCallback  callback on event error
 * @callback closeCallback  callback on event close
 * @returns {Promise} resolves on process close
 * @throws {TypeError} throws if command is not a string or one of the callbacks is not a function
 */
exports.spawnCommandPromise = (command, args, stdoutCallback, stderrCallback, errorCallback, closeCallback) => {
  if (typeof command !== 'string') throw new TypeError('parameter command must be string')
  return new Promise((resolve, reject) => {
    const bash = spawn(command, args, { shell: true })

    bash.stdout.on('data', (data) => {
      if (stdoutCallback) {
        if (typeof stdoutCallback !== 'function') throw new TypeError('parameter stdoutCallback must be function')
        stdoutCallback(data)
      }
    })

    bash.stderr.on('data', (data) => {
      if (stderrCallback) {
        if (typeof stderrCallback !== 'function') throw new TypeError('parameter stderrCallback must be function')
        stderrCallback(data)
      }
    })

    bash.on('error', (error) => {
      if (errorCallback) {
        if (typeof errorCallback !== 'function') throw new TypeError('parameter errorCallback must be function')
        errorCallback(error)
      }
    })

    bash.on('close', (code) => {
      if (closeCallback) {
        if (typeof closeCallback !== 'function') throw new TypeError('parameter closeCallback must be function')
        closeCallback(code)
      }
      resolve()
    })
  })
}

/**
 * Spawns a detached process
 * @param  {String} command  string to run in spawn
 * @param  {Array<String>} args  arguments for the command
 * @throws {TypeError} throws if command is not a string or args is not an array
 */
exports.spawnDetached = (command, args) => {
  if (typeof command !== 'string') throw new TypeError('parameter command must be string')
  if (!Array.isArray(args)) throw new TypeError('parameter args must be array')
  spawn(command, args, {
    detached: true,
    shell: true,
    windowsHide: true,
    stdio: 'ignore'
  }).unref()
}
