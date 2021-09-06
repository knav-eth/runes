import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"

import "@fontsource/source-serif-pro/400.css"
import { useRouter } from "next/router"
import React, { useCallback } from "react"
import { ConnectWalletButton } from "../components/ConnectWalletButton"
import { HardCodedRune } from "../components/HardCodedRune"
import Layout from "../components/Layout"
import { useWallet } from "../hooks/useWallet"
import { ROUTES } from "../utils/routing"


export default function Home() {
  const { isConnected } = useWallet()

  const router = useRouter()
  const handleGetStarted = useCallback(() => {
    router.push(ROUTES.Mint)
  }, [router])

  return (
    <Layout hideLogo>
      <Box textAlign="center" width="full">
        <Box position="relative" zIndex={1}>
        <Heading
          as="h1"
          size="4xl"
          fontSize={["4xl", "6xl", "8xl"]}
          fontWeight="400"
          mb={2}
          color="#9999"
        >
          ru<span style={{ color: "#fff"}}>n</span>es
        </Heading>
        <Text fontSize={["1.25rem"]} color="whiteAlpha.700">
          Generated and stored on chain using one of your Ns
        </Text>
        </Box>

        <Flex justifyContent="center" mt={-4}>
          <HardCodedRune/>
        </Flex>



        <Text fontSize={["1rem", "1.2rem"]} color="whiteAlpha.700" mt={3}>
          Select one of your Ns to get started
        </Text>



        <Box textAlign="center" my={8}>
          {isConnected ? (
            <Button onClick={handleGetStarted}>
              Get Started
            </Button>
          ) : (
            <Box>
              <ConnectWalletButton/>
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  )
}
