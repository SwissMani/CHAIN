# Zentachain - CHAIN

Zentachain - CHAIN contract with 12 Decimals.

## Requirements:

- [Ganache](https://www.trufflesuite.com/ganache)
- [Truffle](https://www.trufflesuite.com)
- [Infura](https://infura.io/)
- [Node Js](https://nodejs.org/en) // We are using v11.19.0
- [Etherscan-API](https://etherscan.io/) // Register to create your API-Key
- [Docker](https://docs.docker.com/get-docker) // Not required (optional)
- [Install Openzeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts) // Command Line (CLI)

````
$ npm install @openzeppelin/contracts
````

## Truffle - Install & Interacting
Install truffle:

````
$ npm install -g truffle
````

## Truffle Console Commands

Compile Contract:
````
truffle compile
````
Use the --reset flag to run all migrations from the beginning:
````
truffle migrate --reset
````

Start Truffle console and interact with the contract instances:

````
$ truffle console
````
Interacting with the contract:
````
$ Zentachain.deployed().then(function(instance){ zentachain = instance; }) // First Command to deploy instances
$ zentachain.symbol()
$ zentachain.decimals()
$ zentachain.totalSupply()
$ zentachain.balanceOf(web3.eth.accounts[0])
$ zentachain.transfer(web3.eth.accounts[1],100,{from:web3.eth.accounts[0]})
````

## HdWallet
Use hdwallet as a provider where a Web3 provider is needed.

Install truffle-hdwallet-provider module:

````
npm install truffle-hdwallet-provider
````

## Truffle-verify

This truffle plugin allows you to automatically verify your smart contracts. Before running verification, make sure that you have actually deployed your contracts to a public network with Truffle.

Install the plugin with:

````
npm install truffle-verify
````

## License

[MIT](https://github.com/ZentaChain/CHAIN-Token/blob/main/LICENSE)
