import { useMemo } from "react"
import { Rune, Rune__factory } from "../../shared/contract_types"
import { getMainContractAddress } from "../utils/network"
import { useBackupProvider } from "./useBackupProvider"
import { useWallet } from "./useWallet"

export enum ContractConnectionType {
  Injected = 0,
  Fallback = 1,
}

export type UseMainContractValue = {
  mainContract: Rune
  connectionType: ContractConnectionType
}

export function useMainContract(): UseMainContractValue {
  const { provider } = useBackupProvider()
  const { wallet } = useWallet()
  const injectedProvider = wallet?.web3Provider
  const mainContract = useMemo(
    () =>
      process.browser
        ? Rune__factory.connect(getMainContractAddress(), injectedProvider ?? provider)
        : null,
    [provider, injectedProvider],
  )

  return {
    mainContract: mainContract!,
    connectionType: injectedProvider
      ? ContractConnectionType.Injected
      : ContractConnectionType.Fallback,
  }
}
