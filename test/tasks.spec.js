const { expect } = require("chai");
const hre = require("hardhat");

describe("MyNFT-TASK", function () {
  
    it("Should deploy the contract", async function () {
        const contract=await ethers.getContractFactory("MyNFT");
        const instance=await contract.deploy();
        console.log("Contract deployed to:",instance.target);
         expect(instance.target).to.not.be.undefined;
        expect(instance.target).to.equal("0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82");
    });

    it("Should mint an NFT", async function () {
        const contract=await ethers.getContractFactory("MyNFT");
        const instance=await contract.deploy();
        const [owner] = await hre.ethers.getSigners();
        const tx=await instance.mintNFT(owner,"https://my-nft");
        console.log(`TX hash:${tx.hash}`);
        await tx.wait();
        expect(tx.hash).to.equal("0x0df0187253735efc1af65b3a1d4805bc184bd9774563cd11f3e8cd3ff4f41a90");
        
    });

})