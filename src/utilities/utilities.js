const Web3 = require('web3')
const web3 = // new Web3('<INFURA/GANACHE_ENDPOINT') // update this

const _ = web3.utils._

// Check current gas price
web3.eth.getGasPrice().then((result) => {
	console.log('gas price estimate:', web3.utils.fromWei(result, 'ether'))
})

// Hashing functions - only accepts a string
console.log('sha3:', web3.utils.sha3('Cypherpunks write code'))
console.log('soliditySha3:', web3.utils.soliditySha3('Cypherpunks write code'))
console.log('keccak256:', web3.utils.keccak256('Cypherpunks write code'))

// Randomness
console.log('randomHex:', web3.utils.randomHex(1))

// Underscore.js
_.each({ key1: 'value1', key2: 'value2' }, (value, key) => {
	console.log(key)
})