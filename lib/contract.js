const { Contract, ethers } = require("ethers");
const { getContractAt } = require("@nomiclabs/hardhat-ethers/internal/helpers");
const { env } = require("./env");
const { getProvider } = require("./provider");

function getContract(name, hre) {
  const WALLET = new ethers.Wallet(env("ETH_PRIVATE_KEY"), getProvider());
  return getContractAt(hre, name, env("NFT_CONTRACT_ADDRESS"), WALLET);
}

module.exports = { getContract };
