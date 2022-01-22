/**
 * Parser service module
 * @module services/parser
 */

/**
 * Removes extra unicode characters
 * @param  {String} unicode  string to clean
 * @param  {Boolean} [raw=false]  option to return raw string
 * @returns {String} returns a cleaned string
 */
function replaceUnicode (unicode, raw = false) {
  if (raw) return unicode.replace(/\\u0000/gm, '').slice(0, -2)
  return JSON.stringify(unicode).replace(/\\u0000/gm, '').replace(/["]/gm, '')
}

/**
 * Splits lines, filters out empty lines and extra characters, and removes specified beginning lines
 * @param  {String} unicode  string to clean and split by lines
 * @param  {(Number|Boolean)} [start=1]  option to specify how many beginning lines to remove
 * @returns {Array} returns the array of lines
 * @throws {TypeError} throws if unicode is not a string or number is not a number or boolean
 */
function splitLines (unicode, start = 1) {
  if (typeof unicode !== 'string') throw new TypeError('parameter unicode must be string')
  if (typeof start !== 'number' && typeof start !== 'boolean') throw new TypeError('parameter command must be number or boolean')
  const stringify = replaceUnicode(unicode)
  const lines = stringify.split('\\r\\n').filter((line) => line).map((line) => line.replace(/\\r/g, ''))
  if (start === false) {
    return lines
  } else {
    return lines.slice(start)
  }
}

/**
 * @typedef ListOnlineObject
 * @type {Object}
 * @property {String} name
 * @property {String} friendly
 */

/**
 * Return line match for listing online
 * @param  {String} line  line string to match against
 * @returns {ListOnlineObject} returns an object of the match groups
 * @throws {TypeError} throws if line is not a string
 */
function listOnlineMatches (line) {
  if (typeof line !== 'string') throw new TypeError('parameter line must be string')
  const regex = /^(?<name>[a-zA-Z0-9-.]+) +(?<friendly>[a-zA-Z0-9-. /]+)/g
  const match = regex.exec(line)
  return { ...match.groups }
}

/**
 * Parses the list online response
 * @param  {String} response  the response to parse
 * @param  {Boolean} raw  option to return a string of the raw output
 * @returns {Array<ListOnlineObject>} returns an array of distribution objects
 * @throws {TypeError} throws if response is not a string or raw is not a boolean
 */
exports.parseListOnline = (response, raw) => {
  if (typeof response !== 'string') throw new TypeError('parameter response must be string')
  if (typeof raw !== 'boolean') throw new TypeError('parameter raw must be boolean')
  if (raw) return replaceUnicode(response, raw)
  const lines = splitLines(response, 3)
  if (lines.length === 0) return null
  return lines.map(line => listOnlineMatches(line))
}

/**
 * @typedef ListObject
 * @type {Object}
 * @property {String} name
 * @property {Boolean} default
 */

/**
 * Return line match for listing
 * @param  {String} line  line string to match against
 * @returns {ListObject} returns an object of the match groups
 * @throws {TypeError} throws if line is not a string
 */
function listMatches (line) {
  if (typeof line !== 'string') throw new TypeError('parameter line must be string')
  const regex = /^(?<name>[a-zA-Z0-9-.]+) *(?<default>[^\s]*)/g
  const match = regex.exec(line)
  match.groups.default = match.groups.default === '(Default)'
  return { ...match.groups }
}

/**
 * Parses the list response
 * @param  {String} response  the response to parse
 * @param  {Boolean} raw  option to return a string of the raw output
 * @returns {Array<ListObject>} returns an array of distribution objects
 * @throws {TypeError} throws if response is not a string or raw is not a boolean
 */
exports.parseList = (response, raw) => {
  if (typeof response !== 'string') throw new TypeError('parameter response must be string')
  if (typeof raw !== 'boolean') throw new TypeError('parameter raw must be boolean')
  if (raw) return replaceUnicode(response, raw)
  const lines = splitLines(response)
  if (lines.length === 0) return null
  return lines.map(line => listMatches(line))
}

/**
 * @typedef ListVerboseObject
 * @type {Object}
 * @property {Boolean} default
 * @property {String} name
 * @property {String} state
 * @property {Number} version
 */

/**
 * Return line match for listing verbose
 * @param  {String} line  line string to match against
 * @returns {ListVerboseObject} returns an object of the match groups
 * @throws {TypeError} throws if line is not a string
 */
function listVerboseMatches (line) {
  if (typeof line !== 'string') throw new TypeError('parameter line must be string')
  const regex = /^(?<default>[ *]{2})(?<name>[a-zA-Z0-9-.]+) +(?<state>[a-zA-Z]+) +(?<version>[a-zA-Z0-9]+)/g
  const match = regex.exec(line)
  match.groups.default = match.groups.default === '* '
  match.groups.version = parseInt(match.groups.version)
  return { ...match.groups }
}

/**
 * Parses the list verbose response
 * @param  {String} response  the response to parse
 * @param  {Boolean} raw  option to return a string of the raw output
 * @returns {Array<ListVerboseObject>} returns an array of distribution objects
 * @throws {TypeError} throws if response is not a string or raw is not a boolean
 */
exports.parseListVerbose = (response, raw) => {
  if (typeof response !== 'string') throw new TypeError('parameter response must be string')
  if (typeof raw !== 'boolean') throw new TypeError('parameter raw must be boolean')
  if (raw) return replaceUnicode(response, raw)
  const lines = splitLines(response)
  if (lines.length === 0) return null
  return lines.map(line => listVerboseMatches(line))
}

/**
 * Parses the list quiet response
 * @param  {String} response  the response to parse
 * @param  {Boolean} raw  option to return a string of the raw output
 * @returns {Array<ListObject>} returns an array of distribution objects
 * @throws {TypeError} throws if response is not a string or raw is not a boolean
 */
exports.parseListQuiet = (response, raw) => {
  if (typeof response !== 'string') throw new TypeError('parameter response must be string')
  if (typeof raw !== 'boolean') throw new TypeError('parameter raw must be boolean')
  if (raw) return replaceUnicode(response, raw)
  const lines = splitLines(response, 0)
  if (lines.length === 0) return null
  return lines
}

/**
 * @typedef StatusObject
 * @type {Object}
 * @property {?String} defaultDistribution
 * @property {Number} defaultVersion
 * @property {Date} lastUpdated
 * @property {Boolean} automaticUpdates
 * @property {String} kernelVersion
 */

/**
 * Parses the status response
 * @param  {String} response  the response to parse
 * @param  {Boolean} raw  option to return a string of the raw output
 * @returns {StatusObject} returns an object of the status
 * @throws {TypeError} throws if response is not a string or raw is not a boolean
 */
exports.parseStatus = (response, raw) => {
  if (typeof response !== 'string') throw new TypeError('parameter response must be string')
  if (typeof raw !== 'boolean') throw new TypeError('parameter raw must be boolean')
  if (raw) return replaceUnicode(response, raw)
  const lines = splitLines(response, false)
  const status = {
    defaultDistribution: null
  }
  lines.forEach((line) => {
    if (line.includes('Default Distribution')) {
      status.defaultDistribution = line.split(': ')[1]
    }
    if (line.includes('Default Version')) {
      status.defaultVersion = parseInt(line.split(': ')[1])
    }
    if (line.includes('Windows Subsystem for Linux was last updated on')) {
      status.lastUpdated = new Date(line.split('on ')[1])
    }
    if (line.includes('WSL automatic updates are')) {
      status.automaticUpdates = line.split('are ')[1].replace(/\./g, '') === 'on'
    }
    if (line.includes('Kernel version')) {
      status.kernelVersion = line.split(': ')[1]
    }
  })
  return status
}
