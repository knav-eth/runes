import "@nomiclabs/hardhat-ethers"
import { task } from "hardhat/config"
import { Rune__factory } from "../../shared/contract_types"
import { persistMainContractAddress } from "../utils/contract"

task("deploy", "Deploy main contract", async (taskArgs, hre) => {
  await hre.run("compile")

  const contractFactory = (await hre.ethers.getContractFactory("Rune")) as Rune__factory

  const contract = await contractFactory.deploy()
  const deployed = await contract.deployed()

  persistMainContractAddress(hre, deployed.address)
  console.log(`Contract has been deployed to: ${deployed.address}`)
})
