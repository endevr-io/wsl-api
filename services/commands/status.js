const { execPromise } = require('../child.js')
const parser = require('../parser.js')

/**
 * Lists the status of WSL
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * const status = await wsl.status()
 * console.log(status)
 * // {
 * //   defaultDistribution: 'Ubuntu',
 * //   defaultVersion: 2,
 * //   lastUpdated: 2021-12-01T06:00:00.000Z,
 * //   automaticUpdates: true,
 * //   kernelVersion: '5.10.60.1'
 * // }
 * ```
 * @param  {Boolean} [raw=false]  option to return a string of the raw output
 * @returns {(Promise|StatusObject|String|Null)} returns a status object, a string of the raw output, or null
 * @throws {TypeError} throws if raw is not a boolean
 */
exports.status = async (raw = false) => {
  if (typeof raw !== 'boolean') throw new TypeError('parameter raw must boolean')
  try {
    const response = await execPromise('wsl.exe --status')
    return parser.parseStatus(response, raw)
  } catch (error) {
    if (raw) return ''
    return null
  }
}
