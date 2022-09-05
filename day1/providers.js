import { BigNumber, ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/4d2d2ec2ccce4453abe8c318a857e4bc`);

console.log(await provider.getBlockNumber())

const balance = await provider.getBalance("0xe5BfA426B219bbb6Ac86f2ec693255944Ec9bf85")
console.log(ethers.utils.formatEther(balance))
console.log(BigNumber.from(5000))
console.log(ethers.utils.formatEther(ethers.utils.parseEther("1.78")))

const privateKey = "0x1bdc4d2a656fab915ac61eaa0f29fa88242c4d94f3724d34a7bc6d6ed15fd58c"

const wallet = new ethers.Wallet(privateKey)

console.log(ethers.utils.verifyMessage("Nhe", await wallet.signMessage("Nhe")))
await wallet.connect(provider)

wallet.sendTransaction({

})

wallet.call({

})

