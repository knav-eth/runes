import React, { useCallback, useState } from "react"
import { SubgraphN } from "../clients/n"
import Layout from "../components/Layout"
import { MintStep } from "../components/minting/MintStep"
import { SelectNStep } from "../components/minting/SelectNStep"
import { useAvailableWalletNs } from "../hooks/useAvailableWalletNs"


export default function Mint() {
  const { availableNs } = useAvailableWalletNs()
  const [selectedN, setSelectedN] = useState<SubgraphN | null>(null)

  const handleCancelMint = useCallback(() => {
    setSelectedN(null)
  }, [])

  return (
    <Layout requireWallet>
      {
        selectedN ? (
          <MintStep onCancel={handleCancelMint} selectedN={selectedN}/>
        ) : (
          <SelectNStep availableNs={availableNs} onSelectN={setSelectedN}/>
        )
      }
    </Layout>
  )
}
