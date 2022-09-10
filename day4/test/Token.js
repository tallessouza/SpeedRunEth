const { expect } = require("chai");
const { ethers  } = require("hardhat");

describe("Token", function () {
  let token
  beforeEach(async () => {
    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy();
    await token.deployed()
  })

  it("Should mint tokens", async function () {
    const [signer0] = await ethers.getSigners()
    const tx = await token.create(100)
    await tx.wait()
    expect(await token.balanceOf(signer0.address)).to.equal(100)
  }); 

  it("Should not mint more than totalSupply", async function () {
    const totalSupply = await token.TOTAL_SUPPLY()
    const tx = token.create(totalSupply.add(1))
    await expect(tx).to.be.reverted
  }); 

  it("Users should not mint, OnlyOwner", async function () {
    const [signer0, signer1] = await ethers.getSigners()

    const tx = token.connect(signer1).create(100)
    expect(tx).to.be.reverted
  }); 

  it("Should allow randoms to buy one token", async function () {
    const [signer0, signer1] = await ethers.getSigners()
    const actualBalance = await token.balanceOf(signer1.address)
    const tx = await token.connect(signer1).buy({value: ethers.utils.parseEther("0.01")})
    await tx.wait()
    expect(await token.balanceOf(signer1.address)).to.equal(actualBalance+1)
    
  });

  it("Should transfer tokens", async function () {
    const [signer0, signer1] = await ethers.getSigners()
    const tx = await token.create(100)
    await tx.wait()
    expect(await token.balanceOf(signer0.address)).to.equal(100)

    const sendTx = await token.transfer(signer1.address, 25)
    await sendTx.wait()

    expect(await token.balanceOf(signer0.address)).to.equal(75)
    expect(await token.balanceOf(signer1.address)).to.equal(25)

  });
});
