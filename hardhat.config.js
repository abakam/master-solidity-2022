require('@nomiclabs/hardhat-ethers');
const { apiKey, privateKey, mnemonic } = require('./secrets.json');
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.5",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${apiKey}`, // or alchemy - `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: [privateKey], //{ mnemonic: mnemonic }, // or [privatekey1, privateKey2] - to use different remote accounts
      gas: 100000000000000
    },
  },
};

// apiKey from metamask Rinkeby Network
// privateKey from metamask
