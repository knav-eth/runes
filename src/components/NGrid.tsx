import { Box } from "@chakra-ui/react"
import React from "react"
import { SubgraphN } from "../clients/n"
import { NWithAvailability } from "../hooks/useAvailableWalletNs"
import { GRID_ANIMATION_VARIANTS, MotionGrid, MotionGridItem } from "../utils/animation"
import NCard from "./NCard"

export type NGridProps = {
  ns: Array<NWithAvailability>
  onClick?: (n: SubgraphN) => void
}

const NGrid: React.FC<NGridProps> = ({ ns, onClick }) => {
  return (
    <MotionGrid
      flex={1}
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      gap={4}
      maxW="930px"
      marginX="auto"
      marginY="52px"
      variants={GRID_ANIMATION_VARIANTS}
      initial={"hidden"}
      animate={"show"}
    >
      {ns.map(({ n, available }) => {
        const numericId = parseInt(n.id)
        return (
          <MotionGridItem
            key={numericId}
            display="flex"
            cursor="pointer"
            variants={GRID_ANIMATION_VARIANTS}
            whileHover={{ scale: 1.05 }}
            onTap={() => {
              onClick?.(n)
            }}
          >
            <Box
              backgroundColor={available ? "gray.800" : "red.800"}
              borderWidth="4px"
              borderColor="transparent"
              borderStyle="solid"
              width="full"
            >
              <NCard n={n} />
            </Box>
          </MotionGridItem>
        )
      })}
    </MotionGrid>
  )
}

export default NGrid
