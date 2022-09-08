import { getProvider, getSigner } from "./utils.js"
import abi from "./abi/daiabi.js"
import { BigNumber, ethers } from "ethers";

const daicontractAdd = `0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735`
const provider = getProvider(false)
const signer = getSigner(false)
// new ethers.Contract(addres)
// console.log(provider)
const contract = new ethers.Contract(
  daicontractAdd,
  abi,
  signer
)

// const myAdd = `0x6E2756D5A4780c4d26De0A91f0c0AF5CE77cBC34`
const daiBalance = await contract.balanceOf(signer.address)
// const tx = await contract.mint(signer.address, ethers.utils.parseEther("10000000"))
// await tx.wait()
// console.log(tx.hash)
// const tx = await contract.transfer("0xe5BfA426B219bbb6Ac86f2ec693255944Ec9bf85", ethers.utils.parseEther("5000000"))
// await tx.wait()
// console.log(tx.hash)
console.log(daiBalance)
console.log(ethers.utils.formatEther(daiBalance))
console.log(BigNumber.from(1))
console.log(ethers.utils.parseEther("1000000000"))