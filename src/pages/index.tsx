import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ConnectWalletButton } from "../components/ConnectWalletButton"
import { HardCodedRune } from "../components/HardCodedRune"
import Layout from "../components/Layout"
import NGrid from "../components/NGrid"
import { useWallet } from "../hooks/useWallet"


export default function Home() {
  const { isConnected } = useWallet()

  return (
    <Layout>
      <Box textAlign="center" width="full">
        <Heading
          as="h1"
          size="4xl"
          fontSize={["4xl", "6xl", "7xl"]}
          textTransform="uppercase"
          fontWeight="900"
          mb={4}
        >
          Runes
        </Heading>

        <Text fontSize={["1.25rem", "1.5rem"]} color="whiteAlpha.700">
          Generated and stored on chain using one of your Ns
        </Text>

        <Text fontSize={["1rem", "1.2rem"]} color="whiteAlpha.700" mt={3}>
          Select one of your Ns to get started
        </Text>

        <Flex justifyContent="center" marginTop={4}>
          <HardCodedRune/>
        </Flex>

        <Box textAlign="center" my={8}>
          {isConnected ? (
            <NGrid/>
          ) : (
            <Box>
              <Text marginTop={16} marginBottom={8}>
                Connect your wallet to see your Ns
              </Text>
              <ConnectWalletButton/>
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  )
}
