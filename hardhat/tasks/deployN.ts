import "@nomiclabs/hardhat-ethers"
import { task } from "hardhat/config"
import { EthNetwork } from "../../shared/config/network"
import { N__factory } from "../../shared/contract_types"
import { getActiveHardhatNetwork, persistNContractAddress } from "../utils/contract"

task("deployN", "Deploy N contract (for use with rinkeby)", async (taskArgs, hre) => {
  await hre.run("compile")

  const network = getActiveHardhatNetwork(hre)
  if (network === EthNetwork.mainnet) {
    throw new Error('Attempted to deploy N to mainnet')
  }

  const contractFactory = (await hre.ethers.getContractFactory("N")) as N__factory

  const contract = await contractFactory.deploy()
  const deployed = await contract.deployed()

  persistNContractAddress(hre, deployed.address)
  console.log(`N has been deployed to: ${deployed.address}`)
})
