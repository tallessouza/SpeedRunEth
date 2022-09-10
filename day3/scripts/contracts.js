const { BigNumber, ethers } = require("ethers");
const hre = require("hardhat");

async function main() {
  const contractadd = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  const contract = await hre.ethers.getContractAt("Lock",contractadd)
  let tx = await contract.greeting()
  console.log(tx)
  // tx = await contract.setGreet("Olá Marilene")
  // await tx.wait()
  // console.log(tx)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
