import { Box, Button, Heading, Link, Spinner, Text } from "@chakra-ui/react"
import React from "react"
import { SubgraphN } from "../../clients/n"
import { NWithAvailability } from "../../hooks/useAvailableWalletNs"
import NGrid from "../NGrid"

export type SelectNStepProps = {
  onSelectN: (n: SubgraphN) => void
  availableNs: Array<NWithAvailability> | undefined
}

export const SelectNStep: React.FC<SelectNStepProps> = ({ onSelectN, availableNs }) => {
  return (
    <Box textAlign="center" width="full">
      <Heading as="h1" size="4xl" fontSize={["2xl", "3xl", "4xl"]} mb={4}>
        Select an N
      </Heading>
      {!availableNs ? (
        <Box marginTop={24}>
          <Spinner size="xl" />
        </Box>
      ) : (
        <Box paddingX={[null, null, "3rem"]}>
          {!availableNs.length && (
            <Box>
              <Text marginTop={16} marginBottom={8} color="whiteAlpha.700">
                You do not own any Ns. You can buy one on OpenSea.
              </Text>
              <Link href="https://opensea.io/collection/n-project">
                <Button>Buy one now</Button>
              </Link>
            </Box>
          )}
          <NGrid ns={availableNs} onClick={onSelectN} />
        </Box>
      )}
    </Box>
  )
}
