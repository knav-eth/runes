import { useMemo } from "react"
import { N, N__factory } from "../../shared/contract_types"
import { getNContractAddress } from "../utils/network"
import { useBackupProvider } from "./useBackupProvider"
import { useWallet } from "./useWallet"

export enum ContractConnectionType {
  Injected = 0,
  Fallback = 1,
}

export type UseNContractValue = {
  nContract: N
  connectionType: ContractConnectionType
}

export function useNContract(): UseNContractValue {
  const { provider } = useBackupProvider()
  const { wallet } = useWallet()
  const injectedProvider = wallet?.web3Provider
  const nContract = useMemo(
    // Only attempt to instantiate the N contract when in browser, not during SSR
    () => process.browser ? N__factory.connect(getNContractAddress(), injectedProvider ?? provider) : null,
    [provider, injectedProvider],
  )

  return {
    nContract: nContract!, // TODO: Come up with a more typesafe way of handling this
    connectionType: injectedProvider ? ContractConnectionType.Injected : ContractConnectionType.Fallback,
  }
}
