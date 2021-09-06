import fs from "fs"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import path from "path"
import { EthNetwork } from "../../shared/config/network"

export const SHARED_DIRECTORY = path.join(__dirname, "../../shared")

export const SHARED_CONFIG_DIRECTORY = path.join(SHARED_DIRECTORY, "config")

const PERSISTED_ENVIRONMENT_CONFIG_FILE = path.join(SHARED_CONFIG_DIRECTORY, "networks.json")
const LOCAL_ENVIRONMENT_CONFIG_FILE = path.join(SHARED_CONFIG_DIRECTORY, "networks.local.json")
const DEFAULT_LOCAL_ENVIRONMENT_CONFIG_FILE = path.join(SHARED_CONFIG_DIRECTORY, "networks.local.example.json")


export function getActiveHardhatNetwork(hre: HardhatRuntimeEnvironment): EthNetwork {
  const ethNetwork: EthNetwork = EthNetwork[hre.network.name as EthNetwork]
  if (!ethNetwork) {
    throw new Error(`Unrecognized network found: ${hre.network.name}`)
  }
  return ethNetwork
}

export type EnvironmentConfiguration = {
  mainContractAddress: string
  nContractAddress: string
}

export function loadLocalEnvironmentConfig(): Partial<Record<EthNetwork, EnvironmentConfiguration>> {
  let localEnvironmentConfig: Partial<Record<EthNetwork, EnvironmentConfiguration>>

  try {
    localEnvironmentConfig = require(LOCAL_ENVIRONMENT_CONFIG_FILE)
  } catch {
    console.warn("Failed to load local environment configuration, using default")
    localEnvironmentConfig = require(DEFAULT_LOCAL_ENVIRONMENT_CONFIG_FILE)
  }

  return localEnvironmentConfig
}

export function loadPersistedConfig(): Partial<Record<EthNetwork, EnvironmentConfiguration>> {
  return require(PERSISTED_ENVIRONMENT_CONFIG_FILE)
}

function getAllEnvironmentConfig(): Partial<Record<EthNetwork, EnvironmentConfiguration>> {
  const persistedEnvironmentConfig: Partial<Record<EthNetwork, EnvironmentConfiguration>> = loadPersistedConfig()
  const localEnvironmentConfig: Partial<Record<EthNetwork, EnvironmentConfiguration>> = loadLocalEnvironmentConfig()

  return {
    ...persistedEnvironmentConfig,
    ...localEnvironmentConfig,
  }
}

export function getEnvironmentConfiguration(hre: HardhatRuntimeEnvironment): EnvironmentConfiguration {
  const allEnvConfig = getAllEnvironmentConfig()
  const currentNetwork = getActiveHardhatNetwork(hre)
  const envConfig = allEnvConfig[currentNetwork]
  if (!envConfig) {
    throw new Error(`Environment Config not found for network ${currentNetwork}`)
  }
  return envConfig
}

export function getMainContractAddress(hre: HardhatRuntimeEnvironment): string {
  return getEnvironmentConfiguration(hre).mainContractAddress
}

export function getNContractAddress(hre: HardhatRuntimeEnvironment): string {
  return getEnvironmentConfiguration(hre).nContractAddress
}

function persistConfig(hre: HardhatRuntimeEnvironment, newConfig: EnvironmentConfiguration) {
  const currentNetwork = getActiveHardhatNetwork(hre)
  const isLocal = currentNetwork === EthNetwork.hardhat || currentNetwork == EthNetwork.localhost
  const existingSavedConfig = isLocal ? loadLocalEnvironmentConfig() : loadPersistedConfig()

  const modifiedConfig = {
    ...existingSavedConfig,
    [currentNetwork]: newConfig,
  }

  const filePath = isLocal ? LOCAL_ENVIRONMENT_CONFIG_FILE : PERSISTED_ENVIRONMENT_CONFIG_FILE
  const contents = JSON.stringify(modifiedConfig, null, 2)
  fs.writeFileSync(filePath, contents)
}

export function persistMainContractAddress(hre: HardhatRuntimeEnvironment, mainContractAddress: string) {
  const existingConfig = getEnvironmentConfiguration(hre)
  const newConfig: EnvironmentConfiguration = {
    ...existingConfig,
    mainContractAddress,
  }

  persistConfig(hre, newConfig)
}

export function persistNContractAddress(hre: HardhatRuntimeEnvironment, nContractAddress: string) {
  const existingConfig = getEnvironmentConfiguration(hre)
  const newConfig: EnvironmentConfiguration = {
    ...existingConfig,
    nContractAddress,
  }

  persistConfig(hre, newConfig)
}
