const { execPromise } = require('../child.js')
const parser = require('../parser.js')

/**
 * Lists running distributions
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * const listRunning = await wsl.listRunning()
 * console.log(listRunning)
 * // [ { name: 'Ubuntu', default: true } ]
 * ```
 * @param  {Boolean} [raw=false]  option to return a string of the raw output
 * @returns {(Promise|Array<ListObject>|String|Null)} returns an array of distribution objects, a string of the raw output, or null
 * @throws {TypeError} throws if raw is not a boolean
 */
exports.listRunning = async (raw = false) => {
  if (typeof raw !== 'boolean') throw new TypeError('parameter raw must boolean')
  try {
    const response = await execPromise('wsl.exe --list --running')
    return parser.parseList(response, raw)
  } catch (error) {
    if (raw) return 'There are no running distributions.'
    return null
  }
}
