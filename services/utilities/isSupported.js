const os = require('os')

/**
 * Checks if WSL is supported in the OS, must be Windows 10 build >= 19041 or Windows 11
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * const isSupported = wsl.isSupported()
 * console.log(isSupported)
 * // true
 * ```
 * @return {Boolean} returns truthy of is WSL supported or false on error
 */
exports.isSupported = () => {
  try {
    if (os.platform() === 'win32' && (os.arch() === 'x64' || os.arch() === 'arm64')) {
      const release = os.release().split('.').map((position) => parseInt(position))
      if (release[0] === 11) return true
      if (release[0] === 10 && release[release.length - 1] >= 19041) return true
    }
    return false
  } catch (error) {
    return false
  }
}
