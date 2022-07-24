const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require("../constants/index");

async function main() {
  const cryptDevTokenAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;
  const exchangeContract = await ethers.getContractFactory("Exchange");
  const deployedExchangeContract = await exchangeContract.deploy(
    cryptDevTokenAddress
  );
  await deployedExchangeContract.deployed();

  console.log("Exchange Contract Address:", deployedExchangeContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });