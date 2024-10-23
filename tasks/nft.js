const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");
// const { env } = require("../lib/env");
// const { getContract }=require("../lib/contract");
// const {getWallet}=require('../lib/wallet.js')

// task("deploy-contract", "Deploy NFT contract").setAction(async (_, hre) => {
//   return hre.ethers
//     .getContractFactory("MyNFT", getWallet())
//     .then((contractFactory) => contractFactory.deploy())
//     .then((result) => {
//       process.stdout.write(`Contract address: ${result.address}`);
//     });
// });

task("deploy-contract","Deploy NFT contract....").setAction(async(hre)=>{
    const contract=await ethers.getContractFactory("MyNFT");
    const instance=await contract.deploy();
   // await instance.deployed();
   //console.log(instance)
    console.log("Contract deployed to:",instance.target);
})

task("mint-nft","Mint an NFT").addParam("tokenuri","Your ERC721 Token URI").setAction(async(p,hre)=>{
    const contract=await ethers.getContractFactory("MyNFT");
    const instance=await contract.deploy();
    console.log(p.tokenuri)
    const tx=await instance.mintNFT(process.env.ETH_PUBLIC_KEY,p.tokenuri)
    console.log(`TX hash:${tx.hash}`);
})



// task("mint-nft", "Mint an NFT")
//   .addParam("tokenUri", "Your ERC721 Token URI", undefined, types.string)
//   .setAction(async (tokenUri, hre) => {
//     return getContract("MyNFT", hre)
//       .then((contract) => {
//         return contract.mintNFT(env("ETH_PUBLIC_KEY"), tokenUri, {
//           gasLimit: 500_000,
//         });
//       })
//       .then((tr) => {
//         process.stdout.write(`TX hash: ${tr.hash}`);
//       });
//   });
