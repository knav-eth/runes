import { Signer } from "@ethersproject/abstract-signer"
import "@nomiclabs/hardhat-ethers"
import { BigNumber } from "ethers"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import prompt from "prompt"

export async function promptForGasPrice(hre: HardhatRuntimeEnvironment, signer: Signer): Promise<BigNumber> {
  const currentGasPrice = await signer.getGasPrice()
  const currentGasInGwei = Math.round(parseInt(hre.ethers.utils.formatUnits(currentGasPrice, "gwei")))

  const result = (await prompt.get([{
    properties: {
      gasPrice: {
        type: "integer",
        required: true,
        description: "Enter a gas price (gwei)",
        default: currentGasInGwei,
      },
    },
  }])) as { gasPrice: number }

  return hre.ethers.utils.parseUnits(result.gasPrice.toString(), "gwei")
}
