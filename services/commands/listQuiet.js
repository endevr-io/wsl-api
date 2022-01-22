const { execPromise } = require('../child.js')
const parser = require('../parser.js')

/**
 * Lists quiet distributions
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * const listQuiet = await wsl.listQuiet()
 * console.log(listQuiet)
 * // [ 'Ubuntu', 'Debian' ]
 * ```
 * @param  {Boolean} [raw=false]  option to return a string of the raw output
 * @returns {(Promise|Array<String>|String|Null)} returns an array of distribution names, a string of the raw output, or null
 * @throws {TypeError} throws if raw is not a boolean
 */
exports.listQuiet = async (raw = false) => {
  if (typeof raw !== 'boolean') throw new TypeError('parameter raw must boolean')
  try {
    const response = await execPromise('wsl.exe --list --quiet')
    return parser.parseListQuiet(response, raw)
  } catch (error) {
    if (raw) return ''
    return null
  }
}
