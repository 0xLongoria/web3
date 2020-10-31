var Web3 = require('web3')
var url = '<INFURA/GANACHE_ENDPOINT>' // update this
var web3 = new Web3(url)

// update variables below with token contract data
var abi = '<CONTRACT_ABI>' // remove quotations
var address = '<CONTRACT_ADDR>'
var accountAddress = '<ACCOUNT_ADDR>' // account with a token balance

var contract = new web3.eth.Contract(abi, contractAddress)

console.log('contract methods:', contract.methods)

contract.methods.name()
	.call((err, result) => { 
		console.log('name:', result) 
	})

contract.methods.symbol()
	.call((err, result) => { 
		console.log('symbol:', result) 
	})

contract.methods.totalSupply()
	.call((err, result) => { 
		console.log('totalSupply:', result) 
	})

contract.methods.balanceOf(accountAddress)
	.call((err, result) => { 
		console.log('balanceOf', accountAddress, ':', result) 
	})