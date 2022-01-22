const { spawnDetached } = require('../child.js')

/**
 * Runs a detached distribution with an optional user. The distribution will be detached from this process in it's own window
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * wsl.runDistributionDetached('Ubuntu', 'endevr')
 * ```
 * @param  {String|Null} [distribution=null]  distribution to run, or the default if not specified
 * @param  {String|Null} [user=null]  the user to run as
 * @throws {TypeError} throws if distribution is not a string
 * @throws {TypeError} throws if user is not a string
 * @throws {Error} throws if the distribution could not be run detached
 */
exports.runDistributionDetached = async (distribution = null, user = null) => {
  if (typeof distribution !== 'string' && distribution !== null) throw new TypeError('parameter distribution must be string or null')
  if (typeof user !== 'string' && user !== null) throw new TypeError('parameter user must be string or null')
  const args = ['wsl.exe']
  if (distribution) {
    args.push('--distribution', distribution)
  }
  if (user) {
    args.push('--user', user)
  }
  try {
    spawnDetached('start', args)
  } catch (error) {
    throw new Error('unable to run ' + (distribution || 'default distribution') + (user ? ' with user ' + user : ''))
  }
}
