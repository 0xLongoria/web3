# Read an account  
## 1_readAccount.js  
```
var Web3 = require('web3')
var url = '<INFURA/GANACHE_ENDPOINT>' // update this
var web3 = new Web3(url)

var address = '<ETH_ADDR>' // update this

// Get ETH balance of address
web3.eth.getBalance(address, (err, bal) => { balance = bal })

console.log('wei balance:', balance)
console.log('ether balance:', web3.utils.fromWei(balance, 'ether'))
```

### eth.getBalance()  
Get the balance of an address at a given block.  
[API Reference - web3.eth.getBalance](https://web3js.readthedocs.io/en/v1.3.0/web3-eth.html?highlight=getbalance#getbalance)
```
> web3.eth.getBalance(address [, defaultBlock] [, callback])
```

### utils.fromWei()  
Converts any wei value into a ether value.  
[API Reference - web3.utils.fromWei](https://web3js.readthedocs.io/en/v1.3.0/web3-utils.html?highlight=fromwei#fromwei)
```
> web3.utils.fromWei(number [, unit])
```