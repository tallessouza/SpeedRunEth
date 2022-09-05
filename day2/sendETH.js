import { BigNumber, ethers } from "ethers"
import { getProvider, getSigner } from "./utils.js"


const mainnetProvider = getProvider(false)
const rinkebySigner = getSigner(false)

const myBalance = await rinkebySigner.getBalance()
console.log(ethers.utils.formatEther(myBalance))
console.log(rinkebySigner.address)

const tx = await rinkebySigner.sendTransaction({
  to: "0xe5BfA426B219bbb6Ac86f2ec693255944Ec9bf85",
  value: myBalance.div(BigNumber.from())
})
console.log(`Sent`, tx.hash)

await tx.wait()
console.log()