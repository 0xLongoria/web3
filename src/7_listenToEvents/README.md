# Listen to Smart Contract Events
## 7_listenToEvent.js
```
const Web3 = require('web3')
const web3 = new Web3('INFURA/GANACHE_ENDPOINT')

const abi = []
const address = 'CONTRACT_ADDR'

const contract = new web3.eth.Contract(abi, address)

contract.getPastEvents(
  'AllEvents',
  {
    fromBlock: 0, // update
    toBlock: 'latest'
  },
  (err, events) => { console.log(events[0]) }
)
```

The above code pulls an array of events emitted from a smart contract between a specified block interval, and prints the first event element in the array. This can be used to view [ERC20 events](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md#events) like `Transfer` and `Approval`.

We can call a specific value from the `events` Objects array to see what data a `Transfer` event emits. An example of a `Transfer` event emitted from the [DAI token smart contract](https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f#events) can be seen below.

```
{
  address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  blockHash: '0x80e1f9b013a51a68dd334d9b9c5843be089fb63d83aaa55828b4625f826a35f6',
  blockNumber: 11248022,
  logIndex: 117,
  removed: false,
  transactionHash: '0xc3527b97eccd09044ac5c988b66c8bba7edce8fc9d66b9375609e2d06dc19b18',
  transactionIndex: 79,
  id: 'log_3a54fe63',
  returnValues: Result {
    '0': '0xAe9656e70FA7AaB9579b47eE31bF0a719e83e814',
    '1': '0x924CD9b60F4173DCDd5254ddD38C4F9CAB68FE6b',
    '2': '74550000000000000000000',
    src: '0xAe9656e70FA7AaB9579b47eE31bF0a719e83e814',
    dst: '0x924CD9b60F4173DCDd5254ddD38C4F9CAB68FE6b',
    wad: '74550000000000000000000'
  },
  event: 'Transfer',
  signature: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
  raw: {
    data: '0x000000000000000000000000000000000000000000000fc95d14c12bfb180000',
    topics: [
      '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
      '0x000000000000000000000000ae9656e70fa7aab9579b47ee31bf0a719e83e814',
      '0x000000000000000000000000924cd9b60f4173dcdd5254ddd38c4f9cab68fe6b'
    ]
  }
}
```

### myContract.getPastEvents()
Gets past events for this contract.  

[API Reference - web3.myContract.getPastEvents](https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html#getpastevents)
```
myContract.getPastEvents(event[, options][, callback])
```