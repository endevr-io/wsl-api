const { execPromise } = require('../child.js')
const parser = require('../parser.js')

/**
 * Lists verbose distributions
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * const listVerbose = await wsl.listVerbose()
 * console.log(listVerbose)
 * // [
 * //   { default: true, name: 'Ubuntu', state: 'Stopped', version: 2 },
 * //   { default: false, name: 'Debian', state: 'Stopped', version: 2 }
 * // ]
 * ```
 * @param  {Boolean} [raw=false]  option to return a string of the raw output
 * @returns {(Promise|Array<ListVerboseObject>|String|Null)} returns an array of distribution objects, a string of the raw output, or null
 * @throws {TypeError} throws if raw is not a boolean
 */
exports.listVerbose = async (raw = false) => {
  if (typeof raw !== 'boolean') throw new TypeError('parameter raw must boolean')
  try {
    const response = await execPromise('wsl.exe --list --verbose')
    return parser.parseListVerbose(response, raw)
  } catch (error) {
    if (raw) {
      return `Windows Subsystem for Linux has no installed distributions.
Distributions can be installed by visiting the Microsoft Store:
https://aka.ms/wslstore`
    }
    return null
  }
}
