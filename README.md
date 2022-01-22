# @endever-io/wsl-api

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/endevr-io/wsl-api?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/endevr-io/wsl-api?style=flat-square)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@endevr-io/wsl-api?style=flat-square)
![GitHub Sponsors](https://img.shields.io/github/sponsors/skuIIs?style=flat-square)
![GitHub](https://img.shields.io/github/license/endevr-io/wsl-api?style=flat-square)

Node wrapper and utilities for the WSL CLI. Uses node child_process with no other dependencies

## Installation

You can use npm or yarn to install this package into your project

```bash
npm install @endever-io/wsl-api
yarn add @endever-io/wsl-api
```

## Functions

<dl>
<dt><a href="#exportDistribution">exportDistribution(distribution, path)</a> ⇒ <code>Promise</code></dt>
<dd><p>Exports a specified distribution to a path/file name</p>
</dd>
<dt><a href="#importDistribution">importDistribution(distribution, location, path)</a> ⇒ <code>Promise</code></dt>
<dd><p>Imports a new distribution to a location from a path/file name</p>
</dd>
<dt><a href="#install">install()</a> ⇒ <code>Promise</code></dt>
<dd><p>Install WSL and Ubuntu</p>
</dd>
<dt><a href="#installDistribution">installDistribution(distribution)</a> ⇒ <code>Promise</code></dt>
<dd><p>Install official distribution</p>
</dd>
<dt><a href="#list">list([raw])</a> ⇒ <code>Promise</code> | <code><a href="#ListObject">Array.&lt;ListObject&gt;</a></code> | <code>String</code> | <code>Null</code></dt>
<dd><p>Lists distributions</p>
</dd>
<dt><a href="#listAll">listAll([raw])</a> ⇒ <code>Promise</code> | <code><a href="#ListObject">Array.&lt;ListObject&gt;</a></code> | <code>String</code> | <code>Null</code></dt>
<dd><p>Lists all distributions</p>
</dd>
<dt><a href="#listOnline">listOnline([raw])</a> ⇒ <code>Promise</code> | <code><a href="#ListOnlineObject">Array.&lt;ListOnlineObject&gt;</a></code> | <code>String</code> | <code>Null</code></dt>
<dd><p>Lists official online distributions that can be installed</p>
</dd>
<dt><a href="#listQuiet">listQuiet([raw])</a> ⇒ <code>Promise</code> | <code>Array.&lt;String&gt;</code> | <code>String</code> | <code>Null</code></dt>
<dd><p>Lists quiet distributions</p>
</dd>
<dt><a href="#listRunning">listRunning([raw])</a> ⇒ <code>Promise</code> | <code><a href="#ListObject">Array.&lt;ListObject&gt;</a></code> | <code>String</code> | <code>Null</code></dt>
<dd><p>Lists running distributions</p>
</dd>
<dt><a href="#listVerbose">listVerbose([raw])</a> ⇒ <code>Promise</code> | <code><a href="#ListVerboseObject">Array.&lt;ListVerboseObject&gt;</a></code> | <code>String</code> | <code>Null</code></dt>
<dd><p>Lists verbose distributions</p>
</dd>
<dt><a href="#mount">mount(path, [name], [bare], [type], [partition], [options])</a> ⇒ <code>Promise</code></dt>
<dd><p>Mounts a disk to all distributions</p>
</dd>
<dt><a href="#runDistribution">runDistribution([distribution], [user])</a></dt>
<dd><p>Runs a distribution with an optional user. The distribution will be attached to this process. Do not await a response</p>
</dd>
<dt><a href="#runDistributionDetached">runDistributionDetached([distribution], [user])</a></dt>
<dd><p>Runs a detached distribution with an optional user. The distribution will be detached from this process in it&#39;s own window</p>
</dd>
<dt><a href="#setDefaultDistribution">setDefaultDistribution(distribution)</a> ⇒ <code>Promise</code></dt>
<dd><p>Sets the default distribution</p>
</dd>
<dt><a href="#setDefaultVersion">setDefaultVersion(version)</a> ⇒ <code>Promise</code></dt>
<dd><p>Sets the default WSL version</p>
</dd>
<dt><a href="#setVersion">setVersion(distribution, version)</a> ⇒ <code>Promise</code></dt>
<dd><p>Sets the WSL version of a distribution</p>
</dd>
<dt><a href="#shutdown">shutdown()</a> ⇒ <code>Promise</code></dt>
<dd><p>Shutdown all distributions</p>
</dd>
<dt><a href="#status">status([raw])</a> ⇒ <code>Promise</code> | <code><a href="#StatusObject">StatusObject</a></code> | <code>String</code> | <code>Null</code></dt>
<dd><p>Lists the status of WSL</p>
</dd>
<dt><a href="#terminate">terminate(distribution)</a> ⇒ <code>Promise</code></dt>
<dd><p>Terminates or stops specified distribution</p>
</dd>
<dt><a href="#unmount">unmount(path)</a> ⇒ <code>Promise</code></dt>
<dd><p>Unmounts a disk to all distributions</p>
</dd>
<dt><a href="#unregister">unregister(distribution)</a> ⇒ <code>Promise</code></dt>
<dd><p>Unregisters or uninstalls specified distribution</p>
</dd>
<dt><a href="#update">update([rollback])</a> ⇒ <code>Promise</code></dt>
<dd><p>Update the WSL kernel</p>
</dd>
<dt><a href="#isSupported">isSupported()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if WSL is supported in the OS, must be Windows 10 build &gt;= 19041 or Windows 11</p>
</dd>
<dt><del><a href="#runBashCommand">runBashCommand(command, [longProcess], [stdoutCallback], [stderrCallback], [errorCallback], [closeCallback])</a> ⇒ <code>Promise</code> | <code>String</code></del></dt>
<dd><p>Runs a bash command on the default distribution</p>
</dd>
<dt><del><a href="#runBashFile">runBashFile(command, [longProcess], [stdoutCallback], [stderrCallback], [errorCallback], [closeCallback])</a> ⇒ <code>Promise</code> | <code>String</code></del></dt>
<dd><p>Runs a bash file on the default distribution</p>
</dd>
<dt><a href="#runWSLCommand">runWSLCommand(command, [distribution], [user], [longProcess], [stdoutCallback], [stderrCallback], [errorCallback], [closeCallback])</a> ⇒ <code>Promise</code> | <code>String</code></dt>
<dd><p>Runs a command on the default or specified distribution. Must be a simple single command. Use <code>runBashCommand</code> for multiple or complex commands or run a bash file with <code>runWSLFile</code> or <code>runBashFile</code></p>
</dd>
<dt><a href="#runWSLFile">runWSLFile(command, [distribution], [user], [longProcess], [stdoutCallback], [stderrCallback], [errorCallback], [closeCallback])</a> ⇒ <code>Promise</code> | <code>String</code></dt>
<dd><p>Runs a bash file on the default or specified istribution</p>
</dd>
<dt><a href="#isInstalled">isInstalled(distribution)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if distribution is installed or exists</p>
</dd>
<dt><a href="#isRunning">isRunning(distribution)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if distribution is currently running</p>
</dd>
<dt><a href="#isNotRunning">isNotRunning(distribution)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if distribution is currently not running</p>
</dd>
<dt><a href="#isAnyRunning">isAnyRunning()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if any distribution is currently running, can also use <code>const isAnyRunning = wsl.listRunning().length &gt;= 1</code></p>
</dd>
<dt><a href="#isInstalling">isInstalling(distribution)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if distribution is currently installing</p>
</dd>
<dt><a href="#waitForRunning">waitForRunning(distribution, [poll])</a> ⇒ <code>Promise</code></dt>
<dd><p>Checks every poll interval and returns a promise when the distribution is running</p>
</dd>
<dt><a href="#waitForNotRunning">waitForNotRunning(distribution, [poll])</a> ⇒ <code>Promise</code></dt>
<dd><p>Checks every poll interval and returns a promise when the distribution is not running</p>
</dd>
<dt><a href="#waitForAllNotRunning">waitForAllNotRunning([poll])</a> ⇒ <code>Promise</code></dt>
<dd><p>Checks every poll interval and returns a promise when all distributions are not running</p>
</dd>
<dt><a href="#waitForInstalling">waitForInstalling(distribution, [poll])</a> ⇒ <code>Promise</code></dt>
<dd><p>Checks every poll interval and returns a promise when the distribution is installing</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ListObject">ListObject</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ListOnlineObject">ListOnlineObject</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ListVerboseObject">ListVerboseObject</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#StatusObject">StatusObject</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="exportDistribution"></a>

## exportDistribution(distribution, path) ⇒ <code>Promise</code>
Exports a specified distribution to a path/file name

**Kind**: global function  
**Returns**: <code>Promise</code> - resolves promise from execPromise  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string or path is not a string
- <code>Error</code> throws if distribution could not be exported


| Param | Type | Description |
| --- | --- | --- |
| distribution | <code>String</code> | distribution to export |
| path | <code>String</code> | path/file name to export to |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')await wsl.exportDistribution('Ubuntu', 'C:\\endevr\\Ubuntu.tar.gz')```
<a name="importDistribution"></a>

## importDistribution(distribution, location, path) ⇒ <code>Promise</code>
Imports a new distribution to a location from a path/file name

**Kind**: global function  
**Returns**: <code>Promise</code> - resolves promise from execPromise  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string or location is not a string or path is not a string
- <code>Error</code> throws if distribution could not be imported


| Param | Type | Description |
| --- | --- | --- |
| distribution | <code>String</code> | distribution to import |
| location | <code>String</code> | folder path to import to |
| path | <code>String</code> | path/file name to import from |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')await wsl.importDistribution('Custom', 'C:\\endevr', 'C:\\endevr\\Ubuntu.tar.gz')```
<a name="install"></a>

## install() ⇒ <code>Promise</code>
Install WSL and Ubuntu

**Kind**: global function  
**Returns**: <code>Promise</code> - resolves promise from execPromise  
**Throws**:

- <code>Error</code> throws if WSL and Ubuntu could not be installed

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')await wsl.install()```
<a name="installDistribution"></a>

## installDistribution(distribution) ⇒ <code>Promise</code>
Install official distribution

**Kind**: global function  
**Returns**: <code>Promise</code> - resolves promise from execPromise  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string
- <code>Error</code> throws if distribution could not be installed


| Param | Type | Description |
| --- | --- | --- |
| distribution | <code>String</code> | distribution to install |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')await wsl.installDistribution('Ubuntu')```
<a name="list"></a>

## list([raw]) ⇒ <code>Promise</code> \| [<code>Array.&lt;ListObject&gt;</code>](#ListObject) \| <code>String</code> \| <code>Null</code>
Lists distributions

**Kind**: global function  
**Returns**: <code>Promise</code> \| [<code>Array.&lt;ListObject&gt;</code>](#ListObject) \| <code>String</code> \| <code>Null</code> - returns an array of distribution objects, a string of the raw output, or null  
**Throws**:

- <code>TypeError</code> throws if raw is not a boolean


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [raw] | <code>Boolean</code> | <code>false</code> | option to return a string of the raw output |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const list = await wsl.list()console.log(list)// [//   { name: 'Ubuntu', default: true },//   { name: 'Debian', default: false }// ]```
<a name="listAll"></a>

## listAll([raw]) ⇒ <code>Promise</code> \| [<code>Array.&lt;ListObject&gt;</code>](#ListObject) \| <code>String</code> \| <code>Null</code>
Lists all distributions

**Kind**: global function  
**Returns**: <code>Promise</code> \| [<code>Array.&lt;ListObject&gt;</code>](#ListObject) \| <code>String</code> \| <code>Null</code> - returns an array of distribution objects, a string of the raw output, or null  
**Throws**:

- <code>TypeError</code> throws if raw is not a boolean


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [raw] | <code>Boolean</code> | <code>false</code> | option to return a string of the raw output |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const listAll = await wsl.listAll()console.log(listAll)// [//   { name: 'Ubuntu', default: true },//   { name: 'Debian', default: false }// ]```
<a name="listOnline"></a>

## listOnline([raw]) ⇒ <code>Promise</code> \| [<code>Array.&lt;ListOnlineObject&gt;</code>](#ListOnlineObject) \| <code>String</code> \| <code>Null</code>
Lists official online distributions that can be installed

**Kind**: global function  
**Returns**: <code>Promise</code> \| [<code>Array.&lt;ListOnlineObject&gt;</code>](#ListOnlineObject) \| <code>String</code> \| <code>Null</code> - returns an array of distribution objects, a string of the raw output, or null  
**Throws**:

- <code>TypeError</code> throws if raw is not a boolean
- <code>Error</code> throws if unable to list online


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [raw] | <code>Boolean</code> | <code>false</code> | option to return a string of the raw output |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const listOnline = await wsl.listOnline()console.log(listOnline)// [//   { name: 'Ubuntu', friendly: 'Ubuntu' },//   { name: 'Debian', friendly: 'Debian GNU/Linux' },//   { name: 'kali-linux', friendly: 'Kali Linux Rolling' },//   { name: 'openSUSE-42', friendly: 'openSUSE Leap 42' },//   { name: 'SLES-12', friendly: 'SUSE Linux Enterprise Server v12' },//   { name: 'Ubuntu-16.04', friendly: 'Ubuntu 16.04 LTS' },//   { name: 'Ubuntu-18.04', friendly: 'Ubuntu 18.04 LTS' },//   { name: 'Ubuntu-20.04', friendly: 'Ubuntu 20.04 LTS' }// ]```
<a name="listQuiet"></a>

## listQuiet([raw]) ⇒ <code>Promise</code> \| <code>Array.&lt;String&gt;</code> \| <code>String</code> \| <code>Null</code>
Lists quiet distributions

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>Array.&lt;String&gt;</code> \| <code>String</code> \| <code>Null</code> - returns an array of distribution names, a string of the raw output, or null  
**Throws**:

- <code>TypeError</code> throws if raw is not a boolean


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [raw] | <code>Boolean</code> | <code>false</code> | option to return a string of the raw output |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const listQuiet = await wsl.listQuiet()console.log(listQuiet)// [ 'Ubuntu', 'Debian' ]```
<a name="listRunning"></a>

## listRunning([raw]) ⇒ <code>Promise</code> \| [<code>Array.&lt;ListObject&gt;</code>](#ListObject) \| <code>String</code> \| <code>Null</code>
Lists running distributions

**Kind**: global function  
**Returns**: <code>Promise</code> \| [<code>Array.&lt;ListObject&gt;</code>](#ListObject) \| <code>String</code> \| <code>Null</code> - returns an array of distribution objects, a string of the raw output, or null  
**Throws**:

- <code>TypeError</code> throws if raw is not a boolean


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [raw] | <code>Boolean</code> | <code>false</code> | option to return a string of the raw output |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const listRunning = await wsl.listRunning()console.log(listRunning)// [ { name: 'Ubuntu', default: true } ]```
<a name="listVerbose"></a>

## listVerbose([raw]) ⇒ <code>Promise</code> \| [<code>Array.&lt;ListVerboseObject&gt;</code>](#ListVerboseObject) \| <code>String</code> \| <code>Null</code>
Lists verbose distributions

**Kind**: global function  
**Returns**: <code>Promise</code> \| [<code>Array.&lt;ListVerboseObject&gt;</code>](#ListVerboseObject) \| <code>String</code> \| <code>Null</code> - returns an array of distribution objects, a string of the raw output, or null  
**Throws**:

- <code>TypeError</code> throws if raw is not a boolean


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [raw] | <code>Boolean</code> | <code>false</code> | option to return a string of the raw output |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const listVerbose = await wsl.listVerbose()console.log(listVerbose)// [//   { default: true, name: 'Ubuntu', state: 'Stopped', version: 2 },//   { default: false, name: 'Debian', state: 'Stopped', version: 2 }// ]```
<a name="mount"></a>

## mount(path, [name], [bare], [type], [partition], [options]) ⇒ <code>Promise</code>
Mounts a disk to all distributions

**Kind**: global function  
**Returns**: <code>Promise</code> - resolves promise from execPromise  
**Throws**:

- <code>TypeError</code> throws if path is not a string, name is not string or null, bare is not boolean, type is not string or null, partition is not number or null, or options is not a string or null
- <code>Error</code> throws if disk could not be mounted


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>String</code> |  | disk path to mount |
| [name] | <code>String</code> \| <code>Null</code> | <code></code> | option to mount with name |
| [bare] | <code>Boolean</code> | <code>false</code> | option to attach the drive but not mount it |
| [type] | <code>String</code> \| <code>Null</code> | <code></code> | option to specify the filesystem type |
| [partition] | <code>Number</code> \| <code>Null</code> | <code></code> | option to specify the partition ID |
| [options] | <code>String</code> \| <code>Null</code> | <code></code> | option with the mounting options, they are already encased with "" |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')await wsl.mount('\\\\.\\PHYSICALDRIVE3', 'F', false, null, null, 'data=ordered')```
<a name="runDistribution"></a>

## runDistribution([distribution], [user])
Runs a distribution with an optional user. The distribution will be attached to this process. Do not await a response

**Kind**: global function  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string
- <code>TypeError</code> throws if user is not a string
- <code>Error</code> throws if the distribution could not be run


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [distribution] | <code>String</code> \| <code>Null</code> | <code></code> | distribution to run, or the default if not specified |
| [user] | <code>String</code> \| <code>Null</code> | <code></code> | the user to run as |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')wsl.runDistribution('Ubuntu', 'endevr')```
<a name="runDistributionDetached"></a>

## runDistributionDetached([distribution], [user])
Runs a detached distribution with an optional user. The distribution will be detached from this process in it's own window

**Kind**: global function  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string
- <code>TypeError</code> throws if user is not a string
- <code>Error</code> throws if the distribution could not be run detached


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [distribution] | <code>String</code> \| <code>Null</code> | <code></code> | distribution to run, or the default if not specified |
| [user] | <code>String</code> \| <code>Null</code> | <code></code> | the user to run as |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')wsl.runDistributionDetached('Ubuntu', 'endevr')```
<a name="setDefaultDistribution"></a>

## setDefaultDistribution(distribution) ⇒ <code>Promise</code>
Sets the default distribution

**Kind**: global function  
**Returns**: <code>Promise</code> - resolves promise from execPromise  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string
- <code>Error</code> throws if default distribution could not be set


| Param | Type | Description |
| --- | --- | --- |
| distribution | <code>String</code> | distribution to set |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')await wsl.setDefaultDistribution('Ubuntu')```
<a name="setDefaultVersion"></a>

## setDefaultVersion(version) ⇒ <code>Promise</code>
Sets the default WSL version

**Kind**: global function  
**Returns**: <code>Promise</code> - resolves promise from execPromise  
**Throws**:

- <code>TypeError</code> throws if version is not a number
- <code>Error</code> throws if version is not 1 or 2
- <code>Error</code> throws if default version could not be set


| Param | Type | Description |
| --- | --- | --- |
| version | <code>Number</code> | version to set |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')await wsl.setDefaultVersion(2)```
<a name="setVersion"></a>

## setVersion(distribution, version) ⇒ <code>Promise</code>
Sets the WSL version of a distribution

**Kind**: global function  
**Returns**: <code>Promise</code> - resolves promise from execPromise  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string
- <code>TypeError</code> throws if version is not a number
- <code>Error</code> throws if version is not 1 or 2
- <code>Error</code> throws if distribution version could not be set


| Param | Type | Description |
| --- | --- | --- |
| distribution | <code>String</code> | distribution to set |
| version | <code>Number</code> | version to set |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')await wsl.setVersion('Ubuntu', 2)```
<a name="shutdown"></a>

## shutdown() ⇒ <code>Promise</code>
Shutdown all distributions

**Kind**: global function  
**Returns**: <code>Promise</code> - resolves promise from execPromise  
**Throws**:

- <code>Error</code> throws if distributions could not be shutdown

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')await wsl.shutdown()```
<a name="status"></a>

## status([raw]) ⇒ <code>Promise</code> \| [<code>StatusObject</code>](#StatusObject) \| <code>String</code> \| <code>Null</code>
Lists the status of WSL

**Kind**: global function  
**Returns**: <code>Promise</code> \| [<code>StatusObject</code>](#StatusObject) \| <code>String</code> \| <code>Null</code> - returns a status object, a string of the raw output, or null  
**Throws**:

- <code>TypeError</code> throws if raw is not a boolean


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [raw] | <code>Boolean</code> | <code>false</code> | option to return a string of the raw output |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const status = await wsl.status()console.log(status)// {//   defaultDistribution: 'Ubuntu',//   defaultVersion: 2,//   lastUpdated: 2021-12-01T06:00:00.000Z,//   automaticUpdates: true,//   kernelVersion: '5.10.60.1'// }```
<a name="terminate"></a>

## terminate(distribution) ⇒ <code>Promise</code>
Terminates or stops specified distribution

**Kind**: global function  
**Returns**: <code>Promise</code> - resolves promise from execPromise  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string
- <code>Error</code> throws if distribution could not be terminated


| Param | Type | Description |
| --- | --- | --- |
| distribution | <code>String</code> | distribution to terminate |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')await wsl.terminate('Ubuntu')```
<a name="unmount"></a>

## unmount(path) ⇒ <code>Promise</code>
Unmounts a disk to all distributions

**Kind**: global function  
**Returns**: <code>Promise</code> - resolves promise from execPromise  
**Throws**:

- <code>TypeError</code> throws if path is not a string
- <code>Error</code> throws if disk could not be unmounted


| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | disk path to unmount |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')await wsl.unmount('\\\\.\\PHYSICALDRIVE3')```
<a name="unregister"></a>

## unregister(distribution) ⇒ <code>Promise</code>
Unregisters or uninstalls specified distribution

**Kind**: global function  
**Returns**: <code>Promise</code> - resolves promise from execPromise  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string
- <code>Error</code> throws if distribution could not be unregistered


| Param | Type | Description |
| --- | --- | --- |
| distribution | <code>String</code> | distribution to unregister |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')await wsl.unregister('Ubuntu')```
<a name="update"></a>

## update([rollback]) ⇒ <code>Promise</code>
Update the WSL kernel

**Kind**: global function  
**Returns**: <code>Promise</code> - resolves promise from execPromise  
**Throws**:

- <code>TypeError</code> throws if rollback is not a boolean
- <code>Error</code> throws if unable to update WSL


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [rollback] | <code>Boolean</code> | <code>false</code> | option to rollback to previous version |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')await wsl.update()```
<a name="isSupported"></a>

## isSupported() ⇒ <code>Boolean</code>
Checks if WSL is supported in the OS, must be Windows 10 build >= 19041 or Windows 11

**Kind**: global function  
**Returns**: <code>Boolean</code> - returns truthy of is WSL supported or false on error  
**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const isSupported = wsl.isSupported()console.log(isSupported)// true```
<a name="runBashCommand"></a>

## ~~runBashCommand(command, [longProcess], [stdoutCallback], [stderrCallback], [errorCallback], [closeCallback]) ⇒ <code>Promise</code> \| <code>String</code>~~
***Deprecated***

Runs a bash command on the default distribution

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>String</code> - returns promise from spawnBashPromise if longProcess is true or string from execPromise if longProcess is false  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| command | <code>String</code> |  | command to run, already is wrapped with "" |
| [longProcess] | <code>Boolean</code> | <code>false</code> | option if to run a process with a single response or a long running process with callbacks for the response |
| [stdoutCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the stdout event, `longProcess` must be true, returns a buffer |
| [stderrCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the stderr event, `longProcess` must be true, returns a buffer |
| [errorCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the error event, `longProcess` must be true, returns a buffer |
| [closeCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the close event, `longProcess` must be true, returns a close code |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const ls = await wsl.runBashCommand('ls')console.log(ls)function callback (data) {  console.log(data.toString())}await wsl.runBashCommand('apt update', true, callback)```
<a name="runBashFile"></a>

## ~~runBashFile(command, [longProcess], [stdoutCallback], [stderrCallback], [errorCallback], [closeCallback]) ⇒ <code>Promise</code> \| <code>String</code>~~
***Deprecated***

Runs a bash file on the default distribution

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>String</code> - returns promise from spawnBashPromise if longProcess is true or string from execPromise if longProcess is false  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| command | <code>String</code> |  | command to run, already is wrapped with "" |
| [longProcess] | <code>Boolean</code> | <code>false</code> | option if to run a process with a single response or a long running process with callbacks for the response |
| [stdoutCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the stdout event, returns a buffer |
| [stderrCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the stderr event, returns a buffer |
| [errorCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the error event, returns a buffer |
| [closeCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the close event, returns a close code |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const short = await wsl.runBashFile('/mnt/c/shortprocess.sh')console.log(short)function callback (data) {  console.log(data.toString())}await wsl.runBashFile('/mnt/c/longprocess.sh', true, callback)```
<a name="runWSLCommand"></a>

## runWSLCommand(command, [distribution], [user], [longProcess], [stdoutCallback], [stderrCallback], [errorCallback], [closeCallback]) ⇒ <code>Promise</code> \| <code>String</code>
Runs a command on the default or specified distribution. Must be a simple single command. Use `runBashCommand` for multiple or complex commands or run a bash file with `runWSLFile` or `runBashFile`

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>String</code> - returns promise from spawnBashPromise if longProcess is true or string from execPromise if longProcess is false  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| command | <code>String</code> |  | command to run, already is wrapped with "" |
| [distribution] | <code>String</code> \| <code>Null</code> | <code></code> | option to specify the distribution or use the default distribution |
| [user] | <code>String</code> \| <code>Null</code> | <code></code> | option to specify the user or use the default user |
| [longProcess] | <code>Boolean</code> | <code>false</code> | option if to run a process with a single response or a long running process with callbacks for the response |
| [stdoutCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the stdout event, returns a buffer |
| [stderrCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the stderr event, returns a buffer |
| [errorCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the error event, returns a buffer |
| [closeCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the close event, returns a close code |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const ls = await wsl.runWSLCommand('ls', 'Ubuntu', 'endevr')console.log(ls)function callback (data) {  console.log(data.toString())}await wsl.runWSLCommand('apt update', 'Ubuntu', 'endevr', true, callback)```
<a name="runWSLFile"></a>

## runWSLFile(command, [distribution], [user], [longProcess], [stdoutCallback], [stderrCallback], [errorCallback], [closeCallback]) ⇒ <code>Promise</code> \| <code>String</code>
Runs a bash file on the default or specified istribution

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>String</code> - returns promise from spawnBashPromise if longProcess is true or string from execPromise if longProcess is false  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| command | <code>String</code> |  | command to run, already is wrapped with "" |
| [distribution] | <code>String</code> \| <code>Null</code> | <code></code> | option to specify the distribution or use the default distribution |
| [user] | <code>String</code> \| <code>Null</code> | <code></code> | option to specify the user or use the default user |
| [longProcess] | <code>Boolean</code> | <code>false</code> | option if to run a process with a single response or a long running process with callbacks for the response |
| [stdoutCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the stdout event, returns a buffer |
| [stderrCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the stderr event, returns a buffer |
| [errorCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the error event, returns a buffer |
| [closeCallback] | <code>function</code> \| <code>Boolean</code> | <code>false</code> | optional callback for the close event, returns a close code |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const short = await wsl.runWSLFile('/mnt/c/shortprocess.sh', 'Ubuntu', 'endevr')console.log(short)function callback (data) {  console.log(data.toString())}await wsl.runWSLFile('/mnt/c/longprocess.sh', 'Ubuntu', 'endevr', true, callback)```
<a name="isInstalled"></a>

## isInstalled(distribution) ⇒ <code>Boolean</code>
Checks if distribution is installed or exists

**Kind**: global function  
**Returns**: <code>Boolean</code> - returns truthy of if the distribution exists  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string


| Param | Type | Description |
| --- | --- | --- |
| distribution | <code>String</code> | distribution to check for installed |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const isInstalled = await wsl.isInstalled('Ubuntu')console.log(isInstalled)// true```
<a name="isRunning"></a>

## isRunning(distribution) ⇒ <code>Boolean</code>
Checks if distribution is currently running

**Kind**: global function  
**Returns**: <code>Boolean</code> - returns truthy of if the distribution is running  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string


| Param | Type | Description |
| --- | --- | --- |
| distribution | <code>String</code> | distribution to check for running |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const isRunning = await wsl.isRunning('Ubuntu')console.log(isRunning)// false```
<a name="isNotRunning"></a>

## isNotRunning(distribution) ⇒ <code>Boolean</code>
Checks if distribution is currently not running

**Kind**: global function  
**Returns**: <code>Boolean</code> - returns truthy of if the distribution is not running  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string


| Param | Type | Description |
| --- | --- | --- |
| distribution | <code>String</code> | distribution to check for not running |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const isNotRunning = await wsl.isNotRunning('Ubuntu')console.log(isNotRunning)// true```
<a name="isAnyRunning"></a>

## isAnyRunning() ⇒ <code>Boolean</code>
Checks if any distribution is currently running, can also use `const isAnyRunning = wsl.listRunning().length >= 1`

**Kind**: global function  
**Returns**: <code>Boolean</code> - returns truthy of if any distribution is running  
**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const isAnyRunning = await wsl.isAnyRunning('Ubuntu')console.log(isAnyRunning)// true```
<a name="isInstalling"></a>

## isInstalling(distribution) ⇒ <code>Boolean</code>
Checks if distribution is currently installing

**Kind**: global function  
**Returns**: <code>Boolean</code> - returns truthy of if the distribution is installing  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string


| Param | Type | Description |
| --- | --- | --- |
| distribution | <code>String</code> | distribution to check for installing |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')const isInstalling = await wsl.isInstalling('Ubuntu')console.log(isInstalling)// false```
<a name="waitForRunning"></a>

## waitForRunning(distribution, [poll]) ⇒ <code>Promise</code>
Checks every poll interval and returns a promise when the distribution is running

**Kind**: global function  
**Returns**: <code>Promise</code> - returns when the distribution is running  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string or poll is not a number


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| distribution | <code>String</code> |  | distribution to wait for running |
| [poll] | <code>Number</code> | <code>1000</code> | option poll interval |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')wsl.runDistribution('Ubuntu', 'endevr')await wsl.waitForRunning('Ubuntu')console.log('Ubuntu has started')// Ubuntu has started```
<a name="waitForNotRunning"></a>

## waitForNotRunning(distribution, [poll]) ⇒ <code>Promise</code>
Checks every poll interval and returns a promise when the distribution is not running

**Kind**: global function  
**Returns**: <code>Promise</code> - returns when the distribution is not running  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string or poll is not a number


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| distribution | <code>String</code> |  | distribution to wait for not running |
| [poll] | <code>Number</code> | <code>1000</code> | option poll interval |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')await wsl.terminate('Ubuntu')await wsl.waitForNotRunning('Ubuntu')console.log('Ubuntu has stopped')// Ubuntu has stopped```
<a name="waitForAllNotRunning"></a>

## waitForAllNotRunning([poll]) ⇒ <code>Promise</code>
Checks every poll interval and returns a promise when all distributions are not running

**Kind**: global function  
**Returns**: <code>Promise</code> - returns when the distribution is not running  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string or poll is not a number


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [poll] | <code>Number</code> | <code>1000</code> | option poll interval |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')wsl.runDistribution('Ubuntu', 'endevr')await wsl.terminate('Ubuntu')await wsl.waitForAllNotRunning()console.log('All distributions have stopped')// All distributions have stopped```
<a name="waitForInstalling"></a>

## waitForInstalling(distribution, [poll]) ⇒ <code>Promise</code>
Checks every poll interval and returns a promise when the distribution is installing

**Kind**: global function  
**Returns**: <code>Promise</code> - returns when the distribution is installing  
**Throws**:

- <code>TypeError</code> throws if distribution is not a string or poll is not a number


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| distribution | <code>String</code> |  | distribution to wait for installing |
| [poll] | <code>Number</code> | <code>1000</code> | option poll interval |

**Example**  
```javascriptconst wsl = require('@endevr-io/wsl-api')await wsl.installDistribution('Ubuntu')await wsl.waitForInstalling('Ubuntu')console.log('Ubuntu is installing')// Ubuntu is installing```
<a name="ListObject"></a>

## ListObject : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| name | <code>String</code> | 
| default | <code>Boolean</code> | 

<a name="ListOnlineObject"></a>

## ListOnlineObject : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| name | <code>String</code> | 
| friendly | <code>String</code> | 

<a name="ListVerboseObject"></a>

## ListVerboseObject : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| default | <code>Boolean</code> | 
| name | <code>String</code> | 
| state | <code>String</code> | 
| version | <code>Number</code> | 

<a name="StatusObject"></a>

## StatusObject : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| defaultDistribution | <code>String</code> | 
| defaultVersion | <code>Number</code> | 
| lastUpdated | <code>Date</code> | 
| automaticUpdates | <code>Boolean</code> | 
| kernelVersion | <code>String</code> | 


## Contributing
Pull requests are welcome for bug fixes or feature requests.

## Sponsors
Support this project and possibly other open-source projects by becoming a sponsor. Higher tier sponsor will appear here with a logo and link to your website. [Become a sponsor](https://github.com/sponsors/skuIIs)

## License
[MIT](https://github.com/endevr-io/wsl-api/blob/main/LICENSE)
