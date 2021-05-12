const Zentachain = artifacts.require('Zentachain');

module.exports = async function (deployer) {
  await deployer.deploy(Zentachain);
};

