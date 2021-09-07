import { Link, Stack, StackItem } from "@chakra-ui/react"
import Image from "next/image"
import React, { useMemo } from "react"
import { getNetworkConfig } from "../utils/network"

export const ExternalLogos = () => {
  const networkConfig = useMemo(() => getNetworkConfig(), [])

  const etherscanLink: string | undefined = useMemo(() => {
    const { blockExplorer, contractConfig: { mainContractAddress } } = networkConfig
    return (
      networkConfig.blockExplorer &&
      `${blockExplorer}/address/${mainContractAddress}`
    )
  }, [networkConfig])

  const openseaUrl: string | undefined = useMemo(() => {
    const { openSeaBaseUrl, openSeaProjectSlug } = networkConfig
    return (
      openSeaBaseUrl && openSeaProjectSlug &&
      `${openSeaBaseUrl}/collection/${openSeaProjectSlug}`
    )
  }, [networkConfig])

  return (
    <Stack direction="row" spacing={4}>
      <Link
        href="https://discord.com/invite/pnx9Rjte2R"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StackItem opacity={0.6} _hover={{ opacity: 0.8 }}>
          {/* N Project Discord Link*/}
          <Image src="/discord_logo.png" width={32} height={32} />
        </StackItem>
      </Link>
      {etherscanLink && (
        <Link href={etherscanLink} target="_blank" rel="noopener noreferrer">
          <StackItem opacity={0.6} _hover={{ opacity: 0.8 }}>
            <Image src="/etherscan_logo.png" width={32} height={32} />
          </StackItem>
        </Link>
      )}
      {openseaUrl && (
        <Link href={openseaUrl} target="_blank" rel="noopener noreferrer">
          <StackItem opacity={0.6} _hover={{ opacity: 0.8 }}>
            <Image src="/opensea_logo.png" width={32} height={32} />
          </StackItem>
        </Link>
      )}
      <Link href="https://twitter.com/getrunes" target="_blank" rel="noopener noreferrer">
        <StackItem opacity={0.6} _hover={{ opacity: 0.8 }}>
          <Image src="/twitter_logo.png" width={32} height={32} />
        </StackItem>
      </Link>
    </Stack>
  )
}
