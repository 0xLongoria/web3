# Create an account  
## 2_createAccount.js  
```
var Web3 = require('web3')
var url = '<INFURA/GANACHE_ENDPOINT>' // update this
var web3 = new Web3(url)

web3.eth.accounts.create()
```

### eth.accounts.create()  
Generates an account object with private key and public key.  

[API Reference - web3.eth.accounts.create](https://web3js.readthedocs.io/en/v1.3.0/web3-eth-accounts.html?highlight=create#create)
```
> web3.eth.accounts.create([entropy]);
```