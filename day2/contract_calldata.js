import { getProvider, getSigner } from "./utils.js"
import abi from "./abi/abi.json" assert { type: 'json' }
import { ethers } from "ethers";

const contractAdd = `0x6E2756D5A4780c4d26De0A91f0c0AF5CE77cBC34`
// const provider = getProvider()
const signer = getSigner(false)
// new ethers.Contract(addres)
// console.log(provider)

const mintPrice = ethers.utils.parseEther("0.01")
// console.log(ethers.utils.formatEther(mintPrice))
const mintCalldata = "0x1249c58b"
const tx = await signer.sendTransaction({
  to: contractAdd,
  value: mintPrice,
  data: mintCalldata // call functions
})
await tx.wait()
console.log(tx.hash)