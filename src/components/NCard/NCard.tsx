import { AspectRatio, Flex } from "@chakra-ui/react"
import React, { useMemo } from "react"
import { NCardProps } from "./props"

type DecodedNMetadata = {
  name: string
  description: string
  image: string
}

const NCard: React.FC<NCardProps> = ({ n, containerProps }) => {
  const svgData: string = useMemo(() => {
    const decoded: DecodedNMetadata = JSON.parse(atob(n.metadataURI.substr(29)))
    return decoded.image
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
