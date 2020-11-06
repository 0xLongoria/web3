var Web3 = require('web3')
var url = '<INFURA/GANACHE_ENDPOINT>' // update this
var web3 = new Web3(url)

// update variables below with token contract data
var contractABI = '<CONTRACT_ABI>' // e.g. [{"constant": true, ...}]
var contractAddress = '<CONTRACT_ADDR>' // address of deployed (token) contract
var accountAddress = '<ACCOUNT_ADDR>' // account with a token balance

var tokenContract = new web3.eth.Contract(contractABI, contractAddress)

console.log('contract methods:', contract.methods)

tokenContract.methods.name()
	.call((err, result) => { 
		console.log('name:', result) 
	})

tokenContract.methods.symbol()
	.call((err, result) => { 
		console.log('symbol:', result) 
	})

tokenContract.methods.totalSupply()
	.call((err, result) => { 
		console.log('totalSupply:', result) 
	})

tokenContract.methods.balanceOf(accountAddress)
	.call((err, result) => { 
		console.log('balanceOf', accountAddress, ':', result) 
	})