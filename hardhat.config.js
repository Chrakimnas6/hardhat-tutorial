require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const ALCHEMY_API_KEY = "7dUV0BkLoNzB8UA6bPM9jgrxIzVmSyxG"
const ROPSTEN_PRIVATE_KEY = "";

module.exports = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
