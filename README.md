# Zentachain - CHAIN

Zentachain - CHAIN contract with 12 Decimals.

## Requirements:

- [Ganache](https://www.trufflesuite.com/ganache)
- [Truffle](https://www.trufflesuite.com)
- [Infura](https://infura.io/)
- [Install Openzeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts) // Commandline

````
$ npm install @openzeppelin/contracts
````

## Truffle - Install & Interacting
Install truffle:

````
$ npm install -g truffle
````

## Truffle console commands:

### Commands:

Compile the CHAIN contract:
````
truffle compile
````
Use the --reset flag to run all migrations from the beginning:
````
truffle migrate --reset
````

### Console:

````
$ truffle console
````
Interacting with the contract:
````
$ zentachain.symbol()
$ zentachain.decimals()
$ zentachain.totalSupply()
$ zentachain.balanceOf( web3.eth.accounts[0])
$ zentachain.transfer(web3.eth.accounts[1],100,{from:web3.eth.accounts[0]})
````

## License

[MIT](https://github.com/ZentaChain/CHAIN-Token/blob/main/LICENSE)
