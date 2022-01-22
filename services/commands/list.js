const { execPromise } = require('../child.js')
const parser = require('../parser.js')

/**
 * Lists distributions
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * const list = await wsl.list()
 * console.log(list)
 * // [
 * //   { name: 'Ubuntu', default: true },
 * //   { name: 'Debian', default: false }
 * // ]
 * ```
 * @param  {Boolean} [raw=false]  option to return a string of the raw output
 * @returns {(Promise|Array<ListObject>|String|Null)} returns an array of distribution objects, a string of the raw output, or null
 * @throws {TypeError} throws if raw is not a boolean
 */
exports.list = async (raw = false) => {
  if (typeof raw !== 'boolean') throw new TypeError('parameter raw must boolean')
  try {
    const response = await execPromise('wsl.exe --list')
    return parser.parseList(response, raw)
  } catch (error) {
    if (raw) {
      return `Windows Subsystem for Linux has no installed distributions.
Distributions can be installed by visiting the Microsoft Store:
https://aka.ms/wslstore`
    }
    return null
  }
}
