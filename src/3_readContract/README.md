# Read a contract
## 3_readContract.js
```
1.  var Web3 = require('web3')
2.  var url = '<INFURA/GANACHE_ENDPOINT>' // update this
3.  var web3 = new Web3(url)
4.  
5.  // update variables below with token contract data
6.  var abi = '<CONTRACT_ABI>'
7.  var address = '<CONTRACT_ADDR>' // remove quotations
8.  var accountAddress = '<ACCOUNT_ADDR>'
9. 
10. var contract = new web3.eth.Contract(abi, contractAddress)
11. 
12. console.log('contract methods:', contract.methods)
13. 
14. contract.methods.name()
15. 	.call((err, result) => { 
16. 		console.log('name:', result) 
17. 	})
18. 
19. contract.methods.symbol()
20. 	.call((err, result) => { 
21. 		console.log('symbol:', result) 
22. 	})
23. 
24. contract.methods.totalSupply()
25. 	.call((err, result) => { 
26. 		console.log('totalSupply:', result) 
27. 	})
28. 
29. contract.methods.balanceOf(accountAddress)
30. 	.call((err, result) => { 
31. 		console.log('balanceOf', accountAddress, ':', result) 
32. 	})
```

The example code above uses two parameters when calling `web3.eth.Contract` on an ERC20 token contract, a jsonInterface (ABI code that specifies the smart contract's functionality) and the contract address. A random token holder address can also be used for calling the `balanceOf` method.

Examples of these parameters for the DAI token are below:
* [DAI Token ABI](https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f#code)
* [DAI Token Address](https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f)
* [DAI Token Holders](https://etherscan.io/token/0x6B175474E89094C44Da98b954EedeAC495271d0F#balances)

### eth.Contract()
The `web3.eth.Contract` object makes it easy to interact with smart contracts on the ethereum blockchain. When you create a new contract object you give it the json interface of the respective smart contract and web3 will auto convert all calls into low level ABI calls over RPC for you. 

This allows you to interact with smart contracts as if they were JavaScript objects.

[API Reference - web3.eth.Contract](https://web3js.readthedocs.io/en/v1.3.0/web3-eth-contract.html#eth-contract)

```
> new web3.eth.Contract(jsonInterface[, address][, options])
```

### methods
Creates a transaction object for the specified method, which then can be [called](https://web3js.readthedocs.io/en/v1.3.0/web3-eth-contract.html?highlight=contract%20methods#contract-call), [sent](https://web3js.readthedocs.io/en/v1.3.0/web3-eth-contract.html?highlight=contract%20methods#contract-send), [estimated](https://web3js.readthedocs.io/en/v1.3.0/web3-eth-contract.html?highlight=contract%20methods#contract-estimategas), or [ABI encoded](https://web3js.readthedocs.io/en/v1.3.0/web3-eth-contract.html?highlight=contract%20methods#contract-encodeabi). Parameters of any method depend on the smart contracts methods, defined in the JSON interface.

[API Reference - methods](https://web3js.readthedocs.io/en/v1.3.0/web3-eth-contract.html#id26)
```
myContract.methods.myMethod([param1[, param2[, ...]]])
```
