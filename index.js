
// COMMANDS
const { exportDistribution } = require('./services/commands/exportDistribution.js')
const { importDistribution } = require('./services/commands/importDistribution.js')
const { install } = require('./services/commands/install.js')
const { installDistribution } = require('./services/commands/installDistribution.js')
const { list } = require('./services/commands/list.js')
const { listAll } = require('./services/commands/listAll.js')
const { listOnline } = require('./services/commands/listOnline.js')
const { listQuiet } = require('./services/commands/listQuiet.js')
const { listRunning } = require('./services/commands/listRunning.js')
const { listVerbose } = require('./services/commands/listVerbose.js')
const { mount } = require('./services/commands/mount.js')
const { runDistribution } = require('./services/commands/runDistribution.js')
const { runDistributionDetached } = require('./services/commands/runDistributionDetached.js')
const { setDefaultDistribution } = require('./services/commands/setDefaultDistribution.js')
const { setDefaultVersion } = require('./services/commands/setDefaultVersion.js')
const { setVersion } = require('./services/commands/setVersion.js')
const { shutdown } = require('./services/commands/shutdown.js')
const { status } = require('./services/commands/status.js')
const { terminate } = require('./services/commands/terminate.js')
const { unmount } = require('./services/commands/unmount.js')
const { unregister } = require('./services/commands/unregister.js')
const { update } = require('./services/commands/update.js')

// UTILITES
const { isSupported } = require('./services/utilities/isSupported.js')
const { runBashCommand } = require('./services/utilities/runBashCommand.js')
const { runBashFile } = require('./services/utilities/runBashFile.js')
const { runWSLCommand } = require('./services/utilities/runWSLCommand.js')
const { runWSLFile } = require('./services/utilities/runWSLFile.js')
const states = require('./services/utilities/states.js')

/**
 * @typedef ListObject
 * @type {Object}
 * @property {String} name
 * @property {Boolean} default
 */

/**
 * @typedef ListOnlineObject
 * @type {Object}
 * @property {String} name
 * @property {String} friendly
 */

/**
 * @typedef ListVerboseObject
 * @type {Object}
 * @property {Boolean} default
 * @property {String} name
 * @property {String} state
 * @property {Number} version
 */

/**
 * @typedef StatusObject
 * @type {Object}
 * @property {?String} defaultDistribution
 * @property {Number} defaultVersion
 * @property {Date} lastUpdated
 * @property {Boolean} automaticUpdates
 * @property {String} kernelVersion
 */

// COMMANDS
exports.exportDistribution = exportDistribution
exports.importDistribution = importDistribution
exports.install = install
exports.installDistribution = installDistribution
exports.list = list
exports.listAll = listAll
exports.listOnline = listOnline
exports.listQuiet = listQuiet
exports.listRunning = listRunning
exports.listVerbose = listVerbose
exports.mount = mount
exports.runDistribution = runDistribution
exports.runDistributionDetached = runDistributionDetached
exports.setDefaultDistribution = setDefaultDistribution
exports.setDefaultVersion = setDefaultVersion
exports.setVersion = setVersion
exports.shutdown = shutdown
exports.status = status
exports.terminate = terminate
exports.unmount = unmount
exports.unregister = unregister
exports.update = update

// UTILITES
exports.isSupported = isSupported
exports.runBashCommand = runBashCommand
exports.runBashFile = runBashFile
exports.runWSLCommand = runWSLCommand
exports.runWSLFile = runWSLFile
exports.isInstalled = states.isInstalled
exports.isRunning = states.isRunning
exports.isNotRunning = states.isNotRunning
exports.isAnyRunning = states.isAnyRunning
exports.isInstalling = states.isInstalling
exports.waitForRunning = states.waitForRunning
exports.waitForNotRunning = states.waitForNotRunning
exports.waitForAllNotRunning = states.waitForAllNotRunning
exports.waitForInstalling = states.waitForInstalling
