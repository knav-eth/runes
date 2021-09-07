import { HardhatRuntimeEnvironment } from "hardhat/types"

export async function getDataForTxn(
  hre: HardhatRuntimeEnvironment,
  transactionHash: string,
): Promise<string> {
  const rasterDataTxn = (await hre.network.provider.request({
    method: "eth_getTransactionByHash",
    params: [transactionHash],
  })) as { input: string }
  if (!rasterDataTxn.input) {
    throw new Error(`Failed to get input from transaction: ${rasterDataTxn}`)
  }
  return rasterDataTxn.input
}
