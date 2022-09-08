import { BigNumber, ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";
import ABI from "./abi/daiabi.js"


const provider = getProvider(false)
const signer = getSigner(false)

const balance = await signer.getBalance()

console.log(ethers.utils.formatEther(balance))
console.log(signer.address)