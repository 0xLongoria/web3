const Web3 = require('web3')
const url = 'https://ropsten.infura.io/v3/b26b1db571c741ad9f444d07f039a8c8' // update this
const web3 = new Web3(url)

var Tx = require('@ethereumjs/tx').Transaction
var Common = require('@ethereumjs/common').default

const account1 = process.env.ADDRESS_1
const account2 = process.env.ADDRESS_2

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')

const contractABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]
const contractAddress = '0xC053222c01878dD84260329edD7dC1b109b69d5A'

const contract = new web3.eth.Contract(contractABI, contractAddress)

const data = contract.methods.transfer(account2, 1000).encodeABI()

// Check Token balance for account 2
// contract.methods.balanceOf(account2).call((err, res) => {
// 	console.log(res)
// })

web3.eth.getTransactionCount(account1, (err, txCount) => {

	// Build the transaction
	const txParams = {
		nonce: web3.utils.toHex(txCount),
		gasLimit: web3.utils.toHex(1000000), // Raise this
		gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei')),
		to: contractAddress,
		data: data // hex encoded representation of contract fxn w/ arguments
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
