import { EthNetwork, EthNetworkConfig, NETWORK_CONFIG } from "../../shared/config/network"


export function getCurrentNetwork(): EthNetwork {
  return EthNetwork.mainnet
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
