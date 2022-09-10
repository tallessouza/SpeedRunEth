const { BigNumber, ethers } = require("ethers");
const hre = require("hardhat");

async function main() {
  const signer = (await hre.ethers.getSigners())[0]
  const myBalance = await signer.getBalance()
  console.log(ethers.utils.formatEther(myBalance))
  const reciever = `0x70997970C51812dc3A010C7d01b50e0d17dc79C8`
  
  const tx = await signer.sendTransaction({
    to: reciever,
    value: myBalance.div(BigNumber.from(10 ))
  })
  console.log(`Sent`, tx.hash)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
