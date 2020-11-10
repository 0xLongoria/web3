# Write to Contract  
## 6_writeToContract.js  
```
const Web3 = require('web3')
const url = '<INFURA/GANACHE_ENDPOINT>' // update this
const web3 = new Web3(url)

var Tx = require('@ethereumjs/tx').Transaction
var Common = require('@ethereumjs/common').default

const account1 = process.env.ADDRESS_1
const account2 = process.env.ADDRESS_2

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')

const contractABI = '<CONTRACT_ABI>' // e.g. [{"constant": true, ...}]
const contractAddress = '<CONTRACT_ADDR>' // address of deployed (token) contract

const contract = new web3.eth.Contract(contractABI, contractAddress);

const data = contract.methods.transfer(account2, 1000).encodeABI()

web3.eth.getTransactionCount(account1, (err, txCount) => {

	// Build the transaction
	const txParams = {
		nonce: web3.utils.toHex(txCount),
		gasLimit: web3.utils.toHex(1000000), // Raise this
		gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei')),
		to: contractAddress,
		data: data 
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

The above code builds a transaction to write (as opposed to read) to a contract, an operation that will change state on the blockchain. We do this by sending a transaction to the contract with  details for the function we are calling in the `data` parameter of the Transaction object. 

In this particular example, we are calling the `transfer` method on `contract` to send 1000 tokens to `account2`. The `transfer` method can be used on any ERC20 token contract, such as the one used in the previous example. 

### methods.myMethod.encodeABI
Encodes the ABI for this method. The resulting hex string is 32-bit function signature hash plus the passed parameters in Solidity tightly packed format. This can be used to send a transaction, call a method, or pass it into another smart contract’s method as arguments. Set the data field on web3.eth.sendTransaction options as the encodeABI() result and it is the same as calling the contract method with contract.myMethod.send().

[API Reference - encodeABI](https://web3js.readthedocs.io/en/v1.3.0/web3-eth-contract.html?highlight=contract%20methods#contract-encodeabi)
```
myContract.methods.myMethod([param1[, param2[, ...]]]).encodeABI()
```
