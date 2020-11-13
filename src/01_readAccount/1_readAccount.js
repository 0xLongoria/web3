var Web3 = require('web3')
var url = '<INFURA/GANACHE_ENDPOINT>' // update this
var web3 = new Web3(url)

var address = '<ETH_ADDR>' // update this

// Get ETH balance of address
web3.eth.getBalance(address, (err, bal) => { balance = bal })

console.log('wei balance:', balance)
console.log('ether balance:', web3.utils.fromWei(balance, 'ether'))