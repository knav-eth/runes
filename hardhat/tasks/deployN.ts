import "@nomiclabs/hardhat-ethers"
import { task } from "hardhat/config"
import { EthNetwork } from "../../shared/config/network"
import { N__factory } from "../../shared/contract_types"
import { getActiveHardhatNetwork, persistNContractAddress } from "../utils/contract"
import { promptForGasPrice } from "../utils/gas"

task("deployN", "Deploy N contract (for use with rinkeby)", async (taskArgs, hre) => {
  await hre.run("compile")

  const network = getActiveHardhatNetwork(hre)
  if (network === EthNetwork.mainnet) {
    throw new Error("Attempted to deploy N to mainnet")
  }

  const contractFactory = (await hre.ethers.getContractFactory("N")) as N__factory

  const gasPrice = await promptForGasPrice(hre, contractFactory.signer)
  const deploymentCost = await contractFactory.signer.estimateGas(contractFactory.getDeployTransaction({ gasPrice }))
  console.log('Estimated cost to deploy contract:', hre.ethers.utils.formatUnits(deploymentCost.mul(gasPrice), 'ether'), 'ETH');

  const contract = await contractFactory.deploy({ gasPrice })
  const deployed = await contract.deployed()

  persistNContractAddress(hre, deployed.address)
  console.log(`N has been deployed to: ${deployed.address}`)
})
