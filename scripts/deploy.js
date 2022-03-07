const { ethers } = require('hardhat');

async function main() {
    // Get the contract to deploy
    const CryptoTokens = await ethers.getContractFactory('CryptoTokens');
    console.log('Deploying CryptoTokens....');
    const cryptoTokens = await CryptoTokens.deploy();
    await cryptoTokens.deployed();
    console.log('CryptoTokens deployed to: ', cryptoTokens.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
     console.error(error);
     process.exit(1);
 });