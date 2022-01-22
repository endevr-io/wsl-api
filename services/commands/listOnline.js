const { execPromise } = require('../child.js')
const parser = require('../parser.js')

/**
 * Lists official online distributions that can be installed
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * const listOnline = await wsl.listOnline()
 * console.log(listOnline)
 * // [
 * //   { name: 'Ubuntu', friendly: 'Ubuntu' },
 * //   { name: 'Debian', friendly: 'Debian GNU/Linux' },
 * //   { name: 'kali-linux', friendly: 'Kali Linux Rolling' },
 * //   { name: 'openSUSE-42', friendly: 'openSUSE Leap 42' },
 * //   { name: 'SLES-12', friendly: 'SUSE Linux Enterprise Server v12' },
 * //   { name: 'Ubuntu-16.04', friendly: 'Ubuntu 16.04 LTS' },
 * //   { name: 'Ubuntu-18.04', friendly: 'Ubuntu 18.04 LTS' },
 * //   { name: 'Ubuntu-20.04', friendly: 'Ubuntu 20.04 LTS' }
 * // ]
 * ```
 * @param  {Boolean} [raw=false]  option to return a string of the raw output
 * @returns {(Promise|Array<ListOnlineObject>|String|Null)} returns an array of distribution objects, a string of the raw output, or null
 * @throws {TypeError} throws if raw is not a boolean
 * @throws {Error} throws if unable to list online
 */
exports.listOnline = async (raw = false) => {
  if (typeof raw !== 'boolean') throw new TypeError('parameter raw must boolean')
  try {
    const response = await execPromise('wsl.exe --list --online')
    return parser.parseListOnline(response, raw)
  } catch (error) {
    if (raw) throw new Error('unable to list online distributions')
    return null
  }
}
