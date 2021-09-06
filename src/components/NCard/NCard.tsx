import { Box } from "@chakra-ui/react"
import React from "react"
import { NCardProps } from "./props"


const NCard: React.FC<NCardProps> = ({ id }) => {
  return (
    <Box>
      {id}
    </Box>
  )
}

export default NCard
