import { Box, Button, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { SubgraphN } from "../../clients/n"
import NCard from "../NCard/NCard"

export type MintStepProps = {
  selectedN: SubgraphN
  onCancel: () => void
}

export const MintStep: React.FC<MintStepProps> = ({ selectedN, onCancel }) => {
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
      <Text>You are about to mint a Rune with N #{selectedN.id}</Text>
      <Box maxWidth="400px" width="90%" marginX="auto" marginY={3}>
        <NCard n={selectedN} />
      </Box>
      <Box>
        <Button display="inline-block" mr={2}>
          Mint
        </Button>
        <Button onClick={onCancel} display="inline-block" ml={2}>
          Cancel
        </Button>
      </Box>
    </Box>
  )
}
