import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"
import { removeConsoleLog } from "hardhat-preprocessor"

import { HardhatUserConfig } from "hardhat/config"
import { loadTasks } from "./hardhat/utils/tasks"
import { ALCHEMY_ID, INFURA_ID } from "./shared/config/base"

loadTasks()

const defaultNetwork = "localhost"

function getMnemonic(): string {
  const mnemonic = process.env.HARDHAT_MNEMONIC
  if (!mnemonic) {
    console.warn("WARNING: No local mnemonic config found, using default")
  }
  return process.env.HARDHAT_MNEMONIC || ""
}

const MNEMONIC = getMnemonic()

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },

  defaultNetwork,

  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_ID}`,
        blockNumber: 12876530,
      },
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    localhost: {
      url: "http://0.0.0.0:8545",
      forking: {
        url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_ID}`,
      },
      accounts: {
        mnemonic: MNEMONIC,
      },
      timeout: 100000,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
      timeout: 100000,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
      timeout: 100000,
    },
  },

  typechain: {
    outDir: "./shared/contract_types",
    externalArtifacts: ["./externalArtifacts/*.json"],
  },
  preprocess: {
    eachLine: removeConsoleLog((hre) => hre.network.name !== "hardhat"),
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
}

export default config
