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
