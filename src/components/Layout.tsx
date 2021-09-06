import { Box, Flex, FlexProps, Text } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import { ConnectWalletButton } from "./ConnectWalletButton"

export type LayoutProps = {
  containerProps?: Partial<FlexProps>
}

const containerPadding = 8

const Layout: React.FC<LayoutProps> = ({ children, containerProps }) => {
  return (
    <Box minH={"100vh"}>
      <Flex flexDir="column" height="100vh">
        <Flex p={containerPadding} zIndex={1} alignItems="center">
          <Link href="/" passHref>
            <Text cursor="pointer" _hover={{ color: "whiteAlpha.700" }}>
              Runes
            </Text>
          </Link>
          <Flex justifyContent="flex-end" flex={1}>
            <ConnectWalletButton/>
          </Flex>
        </Flex>
        <Flex flex={1} p={containerPadding} {...containerProps}>
          {children}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Layout
