# Notes on web3.js

web3.js is a collection of libraries that allow for interaction with a local or remote ethereum node using HTTP, IPC or WebSocket.

**Documentation:**
* Github: https://github.com/ethereum/web3.js/blob/1.x/README.md
* Read the Docs: https://web3js.readthedocs.io/en/v1.3.0/


## Adding web3.js
To get started, you first need to get web3.js into your project. This can be done using the following methods:

* npm: `npm install web3`
* yarn: `yarn add web3`
* pure js: `link the dist/web3.min.js`

After that you need to create a web3 instance and set a provider.

Most Ethereum-supported browsers like MetaMask have an [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) compliant provider available at `window.ethereum`.

For web3.js, check `Web3.givenProvider`.

If this property is `null` you should connect to a local or remote node.
* [Ganache](https://www.trufflesuite.com/ganache) is a local blockchain server that will accept RPC connections on an assigned host and port.
* [Infura](https://infura.io/) provides APIs around [JSON RPC](https://eth.wiki/json-rpc/API) over both HTTPS and WebSocket that can be used to connect to live Ethereum networks (mainnet and testnets).

```
// In Node.js use: const Web3 = require('web3');

let web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545");
```

## Code Examples
The following examples showcase basic commands and functionality capable with web3.js.
1. [Read Account](./src/1_readAccount)
2. [Create Account](./src/2_createAccount)
3. [Read Contract](./src/3_readContract)
4. [Build Transaction](./src/4_buildTx)

* [Additional Features](./src/addlFeatures)