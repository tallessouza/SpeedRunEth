import { getProvider, getSigner } from "./utils.js"
import abi from "./abi/abi.json" assert { type: 'json' }
import { ethers } from "ethers";

const contractAdd = `0x6E2756D5A4780c4d26De0A91f0c0AF5CE77cBC34`
// const provider = getProvider()
const signer = getSigner(false)
// new ethers.Contract(addres)
// console.log(provider)
const contract = new ethers.Contract(
  contractAdd,
  abi,
  signer
)
const mintPrice = await contract.MINT_PRICE()
// console.log(ethers.utils.formatEther(mintPrice))

const tx = await contract.mint({
  value: mintPrice
})
await tx.wait()
console.log(tx.hash)