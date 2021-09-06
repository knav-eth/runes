import { EthNetwork, EthNetworkConfig, NETWORK_CONFIG } from "../../shared/config/network"

export function getCurrentNetwork(): EthNetwork {
  const url = process.env.NEXT_PUBLIC_VERCEL_URL ?? process.env.VERCEL_URL ?? globalThis?.location?.host ?? ""

  const network = Object.values(EthNetwork).find((network) => {
    const config = NETWORK_CONFIG[network]
    return Boolean(url.match(config.envChecker)?.length)
  })
  if (!network) {
    throw new Error(`Unknown network: ${url}`)
  }
  return network
}

export function getNetworkConfig(): EthNetworkConfig {
  return NETWORK_CONFIG[getCurrentNetwork()]
}

export function getNContractAddress(): string {
  return getNetworkConfig().contractConfig.nContractAddress
}

export function getMainContractAddress(): string {
  return getNetworkConfig().contractConfig.mainContractAddress
}

export function getNGraphUrl(): string {
  return getNetworkConfig().nGraphUrl
}

export function getBaseFrontendUrl(): string {
  return getNetworkConfig().baseFrontendUrl
}

export function getBlockExplorerUrl(): string | undefined {
  return getNetworkConfig().blockExplorer
}
