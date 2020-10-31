# Additional features
## addlFeatures.js
```
1. const Web3 = require('web3')
2. const web3 = // new Web3('<INFURA/GANACHE_ENDPOINT') // update this
3. 
4. const _ = web3.utils._
5. 
6. // Check current gas price
7. web3.eth.getGasPrice().then((result) => {
8. 	console.log('gas price estimate:', web3.utils.fromWei(result, 'ether'))
9. })
10. 
11. // Hashing functions - only accepts a string
12. console.log('sha3:', web3.utils.sha3('Cypherpunks write code'))
13. console.log('keccak256:', web3.utils.keccak256('Cypherpunks write code')) // ALIAS
14. console.log('soliditySha3:', web3.utils.soliditySha3('Cypherpunks write code'))
15. 
16. // Randomness
17. console.log('randomHex:', web3.utils.randomHex(1))
18.
19. // Underscore.js - http://underscorejs.org/
20. _.each({ key1: 'value1', key2: 'value2' }, (value, key) => {
21. 	console.log(key)
22. })
```

### eth.getGasPrice()
Returns the current gas price oracle. The gas price is determined by the last few blocks median gas price.
[API Reference - eth.getGasPrice](https://web3js.readthedocs.io/en/v1.3.0/web3-eth.html?highlight=getgasprice#getgasprice)
```
web3.eth.getGasPrice([callback])
```

### utils.sha3() | utils.keccak256()
Will calculate the sha3 of the input.
[API Reference - utils.sha3/keccak256](https://web3js.readthedocs.io/en/v1.3.0/web3-utils.html?highlight=sha3#sha3)
```
web3.utils.sha3(string)
web3.utils.keccak256(string) // ALIAS
```

### utils.solitiySha3()
Will calculate the sha3 of given input parameters in the same way solidity would. This means arguments will be ABI converted and tightly packed before being hashed.
[API Reference - utils.soliditySha3](https://web3js.readthedocs.io/en/v1.3.0/web3-utils.html?highlight=sha3#soliditysha3)
```
web3.utils.soliditySha3(param1 [, param2, ...])
```

### utils.randomHex()
The randomHex library to generate cryptographically strong pseudo-random HEX strings from a given byte size.
[API Reference - utils.randomHex](https://web3js.readthedocs.io/en/v1.3.0/web3-utils.html?highlight=randomhex#randomhex)
```
web3.utils.randomHex(size)
```

### underscore.js
web3.js ships with [underscore.js](http://underscorejs.org/). This can be helpful for debugging purposes.
```
const _ = web3.utils._
```