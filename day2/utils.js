import { ethers } from "ethers";

const getProvider = (mainnet = false) => {
  const providerUrl = mainnet
    ? `https://mainnet.infura.io/v3/4d2d2ec2ccce4453abe8c318a857e4bc`
    : `https://rinkeby.infura.io/v3/4d2d2ec2ccce4453abe8c318a857e4bc`

  return new ethers.providers.JsonRpcProvider(providerUrl)
}

const provider = getProvider(false)
// console.log(`Provider`, await provider.getNetwork())

const generateWallet = () => {
  // address 0xd94EBF4dB497289982424543D39aABAAC67DEcA6
  // privateKey 0x082725cc90c686ad95ad31ddb90794bd69a9dd4cbd9a65abef81b1c3a790fa77
  // mnemonic.phrase outdoor air rib judge curve wood eyebrow try grab render pistol sail
  const wallet = ethers.Wallet.createRandom()
  // console.log(`address`, wallet.address)
  // console.log(`privateKey`, wallet.privateKey)
  // console.log(`mnemonic.phrase`, wallet.mnemonic.phrase)
}
const getSigner = (mainnet = false) => {
  const provider = getProvider(mainnet)
  return new ethers.Wallet("0x082725cc90c686ad95ad31ddb90794bd69a9dd4cbd9a65abef81b1c3a790fa77", provider)
}
export { getProvider, getSigner, generateWallet }