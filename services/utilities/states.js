const { listQuiet } = require('../commands/listQuiet.js')
const { listVerbose } = require('../commands/listVerbose.js')
const { listRunning } = require('../commands/listRunning.js')

/**
 * Checks if distribution is installed or exists
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * const isInstalled = await wsl.isInstalled('Ubuntu')
 * console.log(isInstalled)
 * // true
 * ```
 * @param  {String} distribution  distribution to check for installed
 * @return {Boolean} returns truthy of if the distribution exists
 * @throws {TypeError} throws if distribution is not a string
 */
exports.isInstalled = async (distribution) => {
  if (typeof distribution !== 'string') throw new TypeError('parameter distribution must string')
  try {
    const list = await listQuiet()
    if (list.includes(distribution)) return true
    return false
  } catch (error) {
    return false
  }
}

/**
 * Checks if distribution is currently running
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * const isRunning = await wsl.isRunning('Ubuntu')
 * console.log(isRunning)
 * // false
 * ```
 * @param  {String} distribution  distribution to check for running
 * @return {Boolean} returns truthy of if the distribution is running
 * @throws {TypeError} throws if distribution is not a string
 */
const isRunning = async (distribution) => {
  if (typeof distribution !== 'string') throw new TypeError('parameter distribution must string')
  try {
    const list = await listRunning()
    if (list.includes(distribution)) return true
    return false
  } catch (error) {
    return false
  }
}

/**
 * Checks if distribution is currently not running
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * const isNotRunning = await wsl.isNotRunning('Ubuntu')
 * console.log(isNotRunning)
 * // true
 * ```
 * @param  {String} distribution  distribution to check for not running
 * @return {Boolean} returns truthy of if the distribution is not running
 * @throws {TypeError} throws if distribution is not a string
 */
const isNotRunning = async (distribution) => {
  if (typeof distribution !== 'string') throw new TypeError('parameter distribution must string')
  try {
    const list = await listRunning()
    if (!list.includes(distribution)) return true
    return false
  } catch (error) {
    return false
  }
}

/**
 * Checks if any distribution is currently running, can also use `const isAnyRunning = wsl.listRunning().length >= 1`
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * const isAnyRunning = await wsl.isAnyRunning('Ubuntu')
 * console.log(isAnyRunning)
 * // true
 * ```
 * @return {Boolean} returns truthy of if any distribution is running
 */
const isAnyRunning = async () => {
  const list = await listRunning()
  if (list.length >= 1) {
    return true
  }
  return false
}

/**
 * Checks if distribution is currently installing
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * const isInstalling = await wsl.isInstalling('Ubuntu')
 * console.log(isInstalling)
 * // false
 * ```
 * @param  {String} distribution  distribution to check for installing
 * @return {Boolean} returns truthy of if the distribution is installing
 * @throws {TypeError} throws if distribution is not a string
 */
const isInstalling = async (distribution) => {
  if (typeof distribution !== 'string') throw new TypeError('parameter distribution must string')
  try {
    const list = await listVerbose()
    let isState = false
    list.forEach(line => {
      if (line.name === distribution && line.state === 'Installing') {
        isState = true
      }
    })
    return isState
  } catch (error) {
    return false
  }
}

exports.isRunning = isRunning
exports.isNotRunning = isNotRunning
exports.isAnyRunning = isAnyRunning
exports.isInstalling = isInstalling

/**
 * Checks every poll interval and returns a promise when the distribution is running
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * wsl.runDistribution('Ubuntu', 'endevr')
 * await wsl.waitForRunning('Ubuntu')
 * console.log('Ubuntu has started')
 * // Ubuntu has started
 * ```
 * @param  {String} distribution  distribution to wait for running
 * @param  {Number} [poll=1000]  option poll interval
 * @return {Promise} returns when the distribution is running
 * @throws {TypeError} throws if distribution is not a string or poll is not a number
 */
exports.waitForRunning = async (distribution, poll = 1000) => {
  if (typeof distribution !== 'string') throw new TypeError('parameter distribution must string')
  if (typeof poll !== 'number') throw new TypeError('parameter poll must number')
  return new Promise(resolve => {
    const interval = setInterval(async () => {
      if (isRunning(distribution)) {
        resolve(true)
        clearInterval(interval)
      }
    }, poll)
  })
}

/**
 * Checks every poll interval and returns a promise when the distribution is not running
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * await wsl.terminate('Ubuntu')
 * await wsl.waitForNotRunning('Ubuntu')
 * console.log('Ubuntu has stopped')
 * // Ubuntu has stopped
 * ```
 * @param  {String} distribution  distribution to wait for not running
 * @param  {Number} [poll=1000]  option poll interval
 * @return {Promise} returns when the distribution is not running
 * @throws {TypeError} throws if distribution is not a string or poll is not a number
 */
exports.waitForNotRunning = async (distribution, poll = 1000) => {
  if (typeof distribution !== 'string') throw new TypeError('parameter distribution must string')
  if (typeof poll !== 'number') throw new TypeError('parameter poll must number')
  return new Promise(resolve => {
    const interval = setInterval(async () => {
      if (isNotRunning(distribution)) {
        resolve(true)
        clearInterval(interval)
      }
    }, poll)
  })
}

/**
 * Checks every poll interval and returns a promise when all distributions are not running
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * wsl.runDistribution('Ubuntu', 'endevr')
 * await wsl.terminate('Ubuntu')
 * await wsl.waitForAllNotRunning()
 * console.log('All distributions have stopped')
 * // All distributions have stopped
 * ```
 * @param  {Number} [poll=1000]  option poll interval
 * @return {Promise} returns when the distribution is not running
 * @throws {TypeError} throws if distribution is not a string or poll is not a number
 */
exports.waitForAllNotRunning = async (poll = 1000) => {
  if (typeof distribution !== 'string') throw new TypeError('parameter distribution must string')
  if (typeof poll !== 'number') throw new TypeError('parameter poll must number')
  return new Promise(resolve => {
    const interval = setInterval(async () => {
      if (!isAnyRunning()) {
        resolve(true)
        clearInterval(interval)
      }
    }, poll)
  })
}

/**
 * Checks every poll interval and returns a promise when the distribution is installing
 * @example
 * ```javascript
 * const wsl = require('@endevr-io/wsl-api')
 * await wsl.installDistribution('Ubuntu')
 * await wsl.waitForInstalling('Ubuntu')
 * console.log('Ubuntu is installing')
 * // Ubuntu is installing
 * ```
 * @param  {String} distribution  distribution to wait for installing
 * @param  {Number} [poll=1000]  option poll interval
 * @return {Promise} returns when the distribution is installing
 * @throws {TypeError} throws if distribution is not a string or poll is not a number
 */
exports.waitForInstalling = async (distribution, poll = 1000) => {
  if (typeof distribution !== 'string') throw new TypeError('parameter distribution must string')
  if (typeof poll !== 'number') throw new TypeError('parameter poll must number')
  return new Promise(resolve => {
    const interval = setInterval(async () => {
      if (isInstalling(distribution)) {
        resolve(true)
        clearInterval(interval)
      }
    }, poll)
  })
}
