const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/b26b1db571c741ad9f444d07f039a8c8')

// Get latest block
web3.eth.getBlock('latest').then(console.log)

// Print last 10 block numbers
web3.eth.getBlockNumber().then((latest) => {
	for (let i = 0; i < 10; i++) {
		web3.eth.getBlock(latest - i).then((block) => {
			console.log(block.number)
		})
	}
})

// Print number of transactions in latest block
web3.eth.getBlockTransactionCount('latest').then(console.log)

// Print first transaction in a block with specified hash value
hash = '' // update
web3.eth.getTransactionFromBlock(hash, 0).then(console.log)