import { useCallback, useEffect, useState } from "react"
import { getNsByOwner, SubgraphN } from "../clients/n"
import { useWallet } from "./useWallet"

export type UseWalletNsValue = {
  walletNs: Array<SubgraphN> | undefined
  loading: boolean
}

export function useWalletNs(cacheKey?: any): UseWalletNsValue {
  const { address } = useWallet()
  const [walletNs, setWalletNs] = useState<Array<SubgraphN> | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  const fetchWalletNs = useCallback(async (address: string): Promise<void> => {
    setLoading(true)
    setWalletNs(await getNsByOwner(address))
    setLoading(false)
  }, [])

  useEffect(() => {
    if (address) {
      fetchWalletNs(address)
    } else {
      setWalletNs(undefined)
    }
  }, [address, fetchWalletNs, cacheKey])


  return {
    walletNs,
    loading,
  }
}
