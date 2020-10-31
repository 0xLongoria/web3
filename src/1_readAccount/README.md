# Read an account
## 1_readAccount.js
```
1. var Web3 = require('web3')
2. var url = '<INFURA/GANACHE_ENDPOINT>' // update this
3. var web3 = new Web3(url)
4. 
5. var address = '<ETH_ADDR>' // update this
6. web3.eth.getBalance(address, (err, bal) => { balance = bal })
7.
8. console.log('wei balance:', balance)
9. console.log('ether balance:', web3.utils.fromWei(balance, 'ether'))
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