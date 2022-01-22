const { execPromise } = require('../child.js')

/**
 * Runs a distribution with an optional user. The distribution will be attached to this process. Do not await a response
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * wsl.runDistribution('Ubuntu', 'endevr')
 * ```
 * @param  {String|Null} [distribution=null]  distribution to run, or the default if not specified
 * @param  {String|Null} [user=null]  the user to run as
 * @throws {TypeError} throws if distribution is not a string
 * @throws {TypeError} throws if user is not a string
 * @throws {Error} throws if the distribution could not be run
 */
exports.runDistribution = async (distribution = null, user = null) => {
  if (typeof distribution !== 'string' && distribution !== null) throw new TypeError('parameter distribution must be string or null')
  if (typeof user !== 'string' && user !== null) throw new TypeError('parameter user must be string or null')
  let command = 'wsl.exe'
  if (distribution) {
    command += ` --distribution ${distribution}`
  }
  if (user) {
    command += ` --user ${user}`
  }
  try {
    execPromise(command)
  } catch (error) {
    throw new Error('unable to run ' + (distribution || 'default distribution') + (user ? ' with user ' + user : ''))
  }
}
