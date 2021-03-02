Xazabcore Node
============

A Xazab full node for building applications and services with Node.js. A node is extensible and can be configured to run additional services. At the minimum a node has an interface to [Xazab Core (xazabd) v0.13.0](https://github.com/xazab/xazab/tree/v0.13.0.x) for more advanced address queries. Additional services can be enabled to make a node more useful such as exposing new APIs, running a block explorer and wallet service.

## Usages

### As a standalone server

```bash
git clone https://github.com/xazabevo/xazabcore-node
cd xazabcore-node
npm install
./bin/xazabcore-node start
```

When running the start command, it will seek for a .xazabcore folder with a xazabcore-node.json conf file.
If it doesn't exist, it will create it, with basic task to connect to xazabd.

Some plugins are available :

- Insight-API : `./bin/xazabcore-node addservice @xazabevo/insight-api`
- Insight-UI : `./bin/xazabcore-node addservice @xazabevo/insight-ui`

You also might want to add these index to your xazab.conf file :
```
-addressindex
-timestampindex
-spentindex
```

### As a library

```bash
npm install @xazabevo/xazabcore-node
```

```javascript
const xazabcore = require('@xazabevo/xazabcore-node');
const config = require('./xazabcore-node.json');

let node = xazabcore.scaffold.start({ path: "", config: config });
node.on('ready', function() {
    //Xazab core started
    xazabd.on('tx', function(txData) {
        let tx = new xazabcore.lib.Transaction(txData);
    });
});
```

## Prerequisites

- Xazab Core (xazabd) (v0.13.0) with support for additional indexing *(see above)*
- Node.js v8+
- ZeroMQ *(libzmq3-dev for Ubuntu/Debian or zeromq on OSX)*
- ~20GB of disk storage
- ~1GB of RAM

## Configuration

Xazabcore includes a Command Line Interface (CLI) for managing, configuring and interfacing with your Xazabcore Node.

```bash
xazabcore-node create -d <xazab-data-dir> mynode
cd mynode
xazabcore-node install <service>
xazabcore-node install https://github.com/yourname/helloworld
xazabcore-node start
```

This will create a directory with configuration files for your node and install the necessary dependencies.

Please note that [Xazab Core](https://github.com/xazab/xazab/tree/master) needs to be installed first.

For more information about (and developing) services, please see the [Service Documentation](docs/services.md).

## Add-on Services

There are several add-on services available to extend the functionality of Bitcore:

- [Insight API](https://github.com/xazabevo/insight-api/tree/master)
- [Insight UI](https://github.com/xazabevo/insight-ui/tree/master)
- [Bitcore Wallet Service](https://github.com/xazabevo/xazabcore-wallet-service/tree/master)

## Documentation

- [Upgrade Notes](docs/upgrade.md)
- [Services](docs/services.md)
  - [Xazabd](docs/services/xazabd.md) - Interface to Xazab Core
  - [Web](docs/services/web.md) - Creates an express application over which services can expose their web/API content
- [Development Environment](docs/development.md) - Guide for setting up a development environment
- [Node](docs/node.md) - Details on the node constructor
- [Bus](docs/bus.md) - Overview of the event bus constructor
- [Release Process](docs/release.md) - Information about verifying a release and the release process.


## Setting up dev environment (with Insight)

Prerequisite : Having a xazabd node already runing `xazabd --daemon`.

Xazabcore-node : `git clone https://github.com/xazabevo/xazabcore-node -b develop`
Insight-api (optional) : `git clone https://github.com/xazabevo/insight-api -b develop`
Insight-UI (optional) : `git clone https://github.com/xazabevo/insight-ui -b develop`

Install them :
```
cd xazabcore-node && npm install \
 && cd ../insight-ui && npm install \
 && cd ../insight-api && npm install && cd ..
```

Symbolic linking in parent folder :
```
npm link ../insight-api
npm link ../insight-ui
```

Start with `./bin/xazabcore-node start` to first generate a ~/.xazabcore/xazabcore-node.json file.
Append this file with `"@xazabevo/insight-ui"` and `"@xazabevo/insight-api"` in the services array.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/xazabevo/xazabcore/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/xazabevo/xazabcore-node/blob/master/LICENSE).

Copyright 2016-2018 Xazab Core Group, Inc.

- bitcoin: Copyright (c) 2009-2015 Bitcoin Core Developers (MIT License)
