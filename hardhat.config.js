require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("@nomicfoundation/hardhat-network-helpers")
require("hardhat-contract-sizer")
require("dotenv").config()

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
      hardhat: {
          chainId: 31337,
          gasPrice: 1500000000,
          gas: 4100000,
      },
      localhost: {
          chainId: 31337,
          gasPrice: 1500000000,
          gas: 4100000,
      },

  },
  contractSizer: {
      runOnCompile: false,
      only: ["Raffle"],
  },
  namedAccounts: {
      deployer: {
          default: 0,
          1: 0,
      },
      player: {
          default: 1,
      },
  },
  solidity: {
      compilers: [
          {
              version: "0.8.7",
          },
          {
              version: "0.5.0",
          },
      ],
  },
  mocha: {
      timeout: 500000,
  },
}

