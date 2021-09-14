import { Link, Stack, StackItem } from "@chakra-ui/react"
import Image from "next/image"
import React, { useMemo } from "react"
import { DISCORD_INVITE_LINK, TWITTER_HANDLE } from "../../shared/config/base"
import { getNetworkConfig } from "../utils/network"

type LogoItemProps = {
  href: string
  image: string
}

const LogoItem: React.FC<LogoItemProps> = ({ image, href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      _focus={{ outline: "none" }}
    >
      <StackItem opacity={0.6} _hover={{ opacity: 0.8 }}>
        <Image src={image} width={32} height={32} />
      </StackItem>
    </Link>
  )
}

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
      <LogoItem href={DISCORD_INVITE_LINK} image="/discord_logo.svg" />
      {etherscanLink && (
        <LogoItem href={etherscanLink} image="/etherscan_logo.svg" />
      )}
      {openseaUrl && (
        <LogoItem href={openseaUrl} image="/opensea_logo.png" />
      )}
      <LogoItem href={`https://twitter.com/${TWITTER_HANDLE}`} image="/twitter_logo.svg" />
    </Stack>
  )
}
