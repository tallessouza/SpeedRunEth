const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {


  describe("Deployment", function () {
    it("Deploying contract", async function () {
      const [signer0] = await ethers.getSigners()
      console.log(`Deploying contract as ${signer0.address}`)
      const Counter = await ethers.getContractFactory("Counter");
      const counter = await Counter.deploy(10);
      await counter.deployed()

      const incTX = await counter.inc()
      await incTX.wait()

      expect(await counter.count()).to.equal(11)
      expect(await counter.owner()).to.equal(signer0.address)
    });
    it("Deploying contract", async function () {
      const [signer0, signer1] = await ethers.getSigners()

      console.log(`Deploying contract as ${signer0.address}`)
      const Counter = await ethers.getContractFactory("Counter");
      const counter = await Counter.deploy(10);
      await counter.deployed()

      const decTx = await counter.connect(signer1).dec()
      
    });
  });
});
