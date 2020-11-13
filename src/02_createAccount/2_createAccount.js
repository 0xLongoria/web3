var Web3 = require('web3')
var url = '<INFURA/GANACHE_ENDPOINT>' // update this
var web3 = new Web3(url)

web3.eth.accounts.create()