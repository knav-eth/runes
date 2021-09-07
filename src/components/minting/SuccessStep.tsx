/* eslint-disable @next/next/no-img-element */

import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { SubgraphN } from "../../clients/n"
import { useMainContract } from "../../hooks/useMainContract"
import { getNetworkConfig } from "../../utils/network"
import { ROUTES } from "../../utils/routing"

export type SuccessStepProps = {
  selectedN: SubgraphN
}

export const SuccessStep: React.FC<SuccessStepProps> = ({ selectedN }) => {
  const { mainContract } = useMainContract()
  const [svgContent, setSvgContent] = useState<string | null>(null)
  const router = useRouter()

  const numericId = parseInt(selectedN.id)

  const retrieveRuneSvg = useCallback(async (tokenId: number) => {
    const svgContent = await mainContract.tokenSVG(tokenId)
    setSvgContent(btoa(svgContent))
  }, [mainContract])

  const handleDone = useCallback(() => {
    router.push(ROUTES.Home)
  }, [])

  useEffect(() => {
    retrieveRuneSvg(numericId)
  }, [retrieveRuneSvg, numericId])

  const openSeaUrl: string | undefined = useMemo(() => {
    if (!process.browser) return

    const { openSeaBaseUrl, contractConfig: { mainContractAddress } } = getNetworkConfig()
    if (!openSeaBaseUrl) return

    return `${openSeaBaseUrl}/assets/${mainContractAddress}/${numericId}`
  }, [numericId])

  return (
    <Box textAlign="center" width="full">
      <Heading
        as="h1"
        size="4xl"
        fontSize={["2xl", "3xl", "4xl"]}
        mb={4}
      >
        Mint Rune
      </Heading>
      <Text>Success! You have minted #{selectedN.id}</Text>
      <Box maxWidth="400px" width="90%" marginX="auto" marginY={3}>
        <Box
          backgroundColor="gray.800"
          borderWidth="4px"
          borderColor="transparent"
          borderStyle="solid"
          width="full"
        >
          <img src={`data:image/svg+xml;base64,${svgContent}`}/>
        </Box>
      </Box>

      {openSeaUrl && (
        <Flex justifyContent="center" marginTop={12}>
          <Link
            href={openSeaUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              View on OpenSea
            </Button>
          </Link>
        </Flex>
      )}

      <Box  marginTop={8}>
        <Button onClick={handleDone}>
          Done
        </Button>
      </Box>
    </Box>
  )
}
