# Create an account
## 2_createAccount.js
```
1. var Web3 = require('web3')
2. var url = <INFURA/GANACHE_ENDPOINT> // update this
3. var web3 = new Web3(url)
4. 
5. web3.eth.accounts.create()
```

### eth.accounts.create()
Generates an account object with private key and public key.
[API Reference - web3.eth.accounts.create](https://web3js.readthedocs.io/en/v1.3.0/web3-eth-accounts.html?highlight=create#create)
```
> web3.eth.accounts.create([entropy]);
```