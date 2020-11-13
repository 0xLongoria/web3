# Inspecting Blocks  
## 8_inspectingBlocks
```
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
```

### eth.getBlock()
Returns a block matching the block number or block hash.  

[API Reference - getBlock](https://web3js.readthedocs.io/en/v1.3.0/web3-eth.html#getblock)
```
web3.eth.getBlock(blockHashOrBlockNumber [, returnTransactionObjects] [, callback])
```

### eth.getBlockNumber()
Returns the current block number.  

[API Reference - getBlockNumber](https://web3js.readthedocs.io/en/v1.3.0/web3-eth.html#getblocknumber)
```
web3.eth.getBlockNumber([callback])
```

### eth.getBlockTransactionCount()
Returns the number of transaction in a given block.  

[API Reference - getBlockTransactionCount](https://web3js.readthedocs.io/en/v1.3.0/web3-eth.html#getblocktransactioncount)
```
web3.eth.getBlockTransactionCount(blockHashOrBlockNumber [, callback])
```

### eth.getTransactionFromBlock()
Returns a transaction based on a block hash or number and the transaction’s index position.  

[API Reference - getTransactionFromBlock](https://web3js.readthedocs.io/en/v1.3.0/web3-eth.html#gettransactionfromblock)
```
getTransactionFromBlock(hashStringOrNumber, indexNumber [, callback])
```