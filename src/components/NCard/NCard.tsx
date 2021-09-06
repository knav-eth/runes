import { AspectRatio, Flex } from "@chakra-ui/react"
import React, { useMemo } from "react"
import { parseAndExtractImageFromURI } from "../../utils/metadata"
import { NCardProps } from "./props"

type DecodedNMetadata = {
  name: string
  description: string
  image: string
}

const NCard: React.FC<NCardProps> = ({ n, containerProps }) => {
  const svgData: string = useMemo(() => {
    return parseAndExtractImageFromURI(n.metadataURI)
  }, [n])

  return (
    <AspectRatio ratio={1}>
      <Flex justifyContent="center" alignItems="center" {...containerProps}>
        <img src={svgData} alt={`N #${n.id}`}/>
      </Flex>
    </AspectRatio>
  )
}

export default NCard
