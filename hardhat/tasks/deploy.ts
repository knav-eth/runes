import "@nomiclabs/hardhat-ethers"
import { task } from "hardhat/config"
import { Rune__factory } from "../../shared/contract_types"
import { getNContractAddress, persistMainContractAddress } from "../utils/contract"
import { promptForGasPrice } from "../utils/gas"

task("deploy", "Deploy main contract", async (taskArgs, hre) => {
  await hre.run("compile")

  const contractFactory = (await hre.ethers.getContractFactory("Rune")) as Rune__factory

  const nContractAddress = getNContractAddress(hre)
  if (!nContractAddress) {
    throw new Error("N Contract Address not found")
  }

  const gasPrice = await promptForGasPrice(hre, contractFactory.signer)
  const deploymentCost = await contractFactory.signer.estimateGas(contractFactory.getDeployTransaction(nContractAddress, { gasPrice }))
  console.log('Estimated cost to deploy contract:', hre.ethers.utils.formatUnits(deploymentCost.mul(gasPrice), 'ether'), 'ETH');

  const contract = await contractFactory.deploy(nContractAddress, { gasPrice })
  const deployed = await contract.deployed()

  persistMainContractAddress(hre, deployed.address)
  console.log(`Contract has been deployed to: ${deployed.address}`)
})
