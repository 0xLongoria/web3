# Build a transaction
## 4_buildTx.js
```
1. var Web3 = require('web3')
2. var url = '<INFURA/GANACHE_ENDPOINT>' // update this
3. var web3 = new Web3(url)
4. 
5. var Tx = require('@ethereumjs/tx').Transaction
6. var Common = require('@ethereumjs/common').default
7. 
8. const account1 = '<ETH_ACCOUNT_1>' // update this
9. const account2 = '<ETH_ACCOUNT_2>' // update this
10. 
11. // Private keys should be exported to environment variables
12. // i.e. on command line: > export PRIVATE_KEY_1='<your_priv_key>'
13. const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
14. const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')
15. 
16. // Send signed transaction
17. web3.eth.getTransactionCount(account1, (err, txCount) => {
18. 
19. 	// Build the transaction
20. 	const txParams = {
21. 		nonce: web3.utils.toHex(txCount),
22. 		to: account1,
23. 		value: web3.utils.toHex(web3.utils.toWei('0', 'ether'))
24. 		gasLimit: web3.utils.toHex(21000),
25. 		gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei'))
26. 	}
27. 
28. 	// Sign the transaction
29. 	const common = new Common({ chain: 'ropsten' })
30. 	const tx = Tx.fromTxData(txParams, { common })
31. 	const signedTx = tx.sign(privateKey1)
32. 	const serializedTx = signedTx.serialize()
33. 	const rawTx = '0x' + serializedTx.toString('hex')
34. 
35. 	// Broadcast the transaction
36. 	web3.eth.sendSignedTransaction(rawTx, (err, txHash) => {
37. 		console.log('err:', err, 'txHash:', txHash)
38. 	})
39. })
```

### ethereumjs-vm
**Install**
`npm install @ethereumjs/tx`

@ethereumjs/tx is a simple module for creating, manipulating and signing Ethereum transactions.

@ethereumjs/common is included as a dependency when installing @ethereumjs/tx and provides resources common to all Ethereum implementations.

**Documentation:**
* [@ethereumjs/tx NPM Package](https://www.npmjs.com/package/@ethereumjs/tx)
* [@ethereumjs/tx Github](https://github.com/ethereumjs/ethereumjs-vm/tree/master/packages/tx)
* [@ethereumjs/common NPM Package](https://www.npmjs.com/package/@ethereumjs/common)
* [@ethereumjs/common Github](https://github.com/ethereumjs/ethereumjs-vm/tree/master/packages/common)

