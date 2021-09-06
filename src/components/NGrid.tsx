import { Box, Link, Spinner, Text } from "@chakra-ui/react"
import React from "react"
import { useWalletNs } from "../hooks/useWalletNs"
import { GRID_ANIMATION_VARIANTS, MotionGrid, MotionGridItem } from "../utils/animation"
import NCard from "./NCard"

const NGrid: React.FC = () => {
  const { loading, walletNs } = useWalletNs()

  const ns = walletNs ?? []

  return (
    (
      loading ? (
        <Box marginTop={24}>
          <Spinner size="xl"/>
        </Box>
      ) : (
        <Box paddingX={["2rem", null, "3rem"]}>
          {!ns.length && (
            <Text marginTop={16} marginBottom={8} color="whiteAlpha.700">
              You do not own any Ns. Click <Link href="http://www.google.com" rel="noopener noreferrer" target="_blank">here</Link> to buy some.
            </Text>
          )}
          <MotionGrid
            flex={1}
            templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
            gap={4}
            maxW="930px"
            marginX="auto"
            marginY="52px"
            variants={GRID_ANIMATION_VARIANTS}
            initial={"hidden"}
            animate={"show"}
          >
            {ns.map(n => {
              const numericId = parseInt(n.id)
              return (
                <MotionGridItem
                  key={numericId}
                  display="flex"
                  cursor="pointer"
                  variants={GRID_ANIMATION_VARIANTS}
                  whileHover={{ scale: 1.05 }}
                >
                  <Box
                    backgroundColor="gray.800"
                    borderWidth="4px"
                    borderColor="transparent"
                    borderStyle="solid"
                    width="full"
                  >
                    <NCard id={numericId} />
                  </Box>
                </MotionGridItem>
              )
            })}
          </MotionGrid>
        </Box>
      )
    )
  )
}

export default NGrid
