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