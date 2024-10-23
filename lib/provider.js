const ethers=require('ethers')

 function getProvider() {
  return ethers.JsonRpcApiProvider("ropsten", {
    alchemy: process.env.ALCHEMY_API_KEY,
  });
}

module.exports={
    getProvider
}