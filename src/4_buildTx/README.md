# Build a Transaction  
## 4_buildTx.js  
```
var Web3 = require('web3')
var url = '<INFURA/GANACHE_ENDPOINT>' // update this
var web3 = new Web3(url)

var Tx = require('@ethereumjs/tx').Transaction
var Common = require('@ethereumjs/common').default // https://github.com/ethereumjs/ethereumjs-common/releases/tag/v1.0.0

const account1 = '<ETH_ACCOUNT_1>' // update this
const account2 = '<ETH_ACCOUNT_2>' // update this

// Private keys should be exported to environment variables
// i.e. on command line: > export PRIVATE_KEY_1='<your_priv_key>'
const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')

// Send signed transaction 
web3.eth.getTransactionCount(account1, (err, txCount) => {

	// Build the transaction
	const txParams = {
		nonce: web3.utils.toHex(txCount),
		to: account1,
		value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
		gasLimit: web3.utils.toHex(21000),
		gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei'))
	}

	// Sign the transaction
	const common = new Common({ chain: 'ropsten' })
	const tx = Tx.fromTxData(txParams, { common })
	const signedTx = tx.sign(privateKey1)
	const serializedTx = signedTx.serialize()
	const rawTx = '0x' + serializedTx.toString('hex')

	// Broadcast the transaction
	web3.eth.sendSignedTransaction(rawTx, (err, txHash) => {
		console.log('err:', err, 'txHash:', txHash)
		// Use this txHash to find the contract on Etherscan
	})
})
```

### ethereumjs-vm  
**Install**  
`npm install @ethereumjs/tx`  

@ethereumjs/tx is a simple module for creating, manipulating and signing Ethereum transactions.  

@ethereumjs/common is included as a dependency when installing @ethereumjs/tx and provides resources common to all Ethereum implementations.  

**Documentation:**  
* [@ethereumjs/tx - NPM Package](https://www.npmjs.com/package/@ethereumjs/tx)
* [@ethereumjs/tx - Github](https://github.com/ethereumjs/ethereumjs-vm/tree/master/packages/tx)
* [@ethereumjs/common - NPM Package](https://www.npmjs.com/package/@ethereumjs/common)
* [@ethereumjs/common - Github](https://github.com/ethereumjs/ethereumjs-vm/tree/master/packages/common)
