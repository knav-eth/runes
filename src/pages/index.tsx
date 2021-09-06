import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React, { useCallback } from "react"
import { ConnectWalletButton } from "../components/ConnectWalletButton"
import { HardCodedRune } from "../components/HardCodedRune"
import Layout from "../components/Layout"
import { useWallet } from "../hooks/useWallet"
import { ROUTES } from "../utils/routing"

import "@fontsource/source-serif-pro/400.css"
import { motion } from "framer-motion"


export default function Home() {
  const { isConnected } = useWallet()

  const router = useRouter()
  const handleGetStarted = useCallback(() => {
    router.push(ROUTES.Mint)
  }, [router])
  const MotionBox = motion(Box)
  return (
    <Layout>
      <MotionBox textAlign="center" width="full"  opacity={0} animate={{ opacity: 1}} transition={{ delay: .5, duration: 1 }}>
        <Box position="relative" zIndex={1}>
        <Heading
          as="h1"
          size="4xl"
          fontSize={["7xl", "7xl", "8xl"]}
          fontWeight="400"
          mb={2}
          color="#9999"
        >
          ru<MotionBox display="inline-block" textShadow={"0px 0px 0px rgba(0, 0, 0, 0)"} animate={{ color: "#FFF", textShadow: "0px 0px 20px rgba(255, 255, 255, .7)"}} transition={{ duration: 2, delay: 1 }}>n</MotionBox>es
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
            <Button onClick={handleGetStarted} size="lg">
              Get Started
            </Button>
          ) : (
            <Box>
              <ConnectWalletButton/>
            </Box>
          )}
        </Box>
      </MotionBox>
    </Layout>
  )
}
