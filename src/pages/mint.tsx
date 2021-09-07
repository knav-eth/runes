import React, { useCallback, useState } from "react"
import { SubgraphN } from "../clients/n"
import Layout from "../components/Layout"
import { MintStep } from "../components/minting/MintStep"
import { SelectNStep } from "../components/minting/SelectNStep"
import { SuccessStep } from "../components/minting/SuccessStep"
import { useAvailableWalletNs } from "../hooks/useAvailableWalletNs"

export default function Mint() {
  const { availableNs } = useAvailableWalletNs()
  const [selectedN, setSelectedN] = useState<SubgraphN | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleCancelMint = useCallback(() => {
    setSelectedN(null)
  }, [])

  const handleSuccess = useCallback(() => {
    setIsSuccess(true)
  }, [])

  return (
    <Layout requireWallet>
      {selectedN ? (
        isSuccess ? (
          <SuccessStep selectedN={selectedN} />
        ) : (
          <MintStep
            onCancel={handleCancelMint}
            selectedN={selectedN}
            onSuccess={handleSuccess}
          />
        )
      ) : (
        <SelectNStep availableNs={availableNs} onSelectN={setSelectedN} />
      )}
    </Layout>
  )
}
