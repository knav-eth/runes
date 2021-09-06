import { Box, Flex, FlexProps, Text } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import { useWallet } from "../hooks/useWallet"
import { ConnectWalletButton } from "./ConnectWalletButton"

export type LayoutProps = {
  requireWallet?: boolean
  containerProps?: Partial<FlexProps>
}

const containerPadding = 8

const Layout: React.FC<LayoutProps> = ({ children, containerProps, requireWallet = false }) => {
  const { isConnected } = useWallet()
  return (
    <Box minH={"100vh"}>
      <Flex flexDir="column" minH="100vh">
        <Flex p={containerPadding} zIndex={1} alignItems="center">
          <Link href="/" passHref>
            <Text cursor="pointer" _hover={{ color: "whiteAlpha.700" }} fontFamily={"Source Serif Pro"}>
              runes
            </Text>
          </Link>
          <Flex justifyContent="flex-end" flex={1}>
            <ConnectWalletButton/>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          flex={1}
          p={containerPadding}
          {...containerProps}
        >
          {requireWallet && !isConnected ? (
            <Box textAlign="center" my={8} width="full">
              <Text marginTop={16} marginBottom={8}>
                Connect your wallet to continue
              </Text>
              <ConnectWalletButton/>
            </Box>
          ) : children}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Layout
