import { AspectRatio, Flex, Spinner } from "@chakra-ui/react"
import React, { useCallback, useEffect, useState } from "react"
import { useNContract } from "../../hooks/useNContract"
import { NCardProps } from "./props"

type DecodedNMetadata = {
  name: string
  description: string
  image: string
}

const NCard: React.FC<NCardProps> = ({ id, containerProps }) => {
  const { nContract } = useNContract()
  const [svgData, setSvgData] = useState<string | null>(null)

  const fetchSvgDataFromContract = useCallback(async (tokenId: number) => {
    try {
      const metadataUri = await nContract.tokenURI(tokenId)
      const decoded: DecodedNMetadata = JSON.parse(atob(metadataUri.substr(29)))
      setSvgData(decoded.image)
    } catch (e) {
      console.error(`Error getting svg data: ${e}`)
    }
  }, [nContract])

  useEffect(() => {
    fetchSvgDataFromContract(id)
  }, [id, fetchSvgDataFromContract])

  return (
    <AspectRatio ratio={1}>
      <Flex justifyContent="center" alignItems="center" {...containerProps}>
        {
          svgData ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={svgData} alt={`N #${id}`}/>
          ) : (
            <Spinner/>
          )
        }
      </Flex>
    </AspectRatio>
  )
}

export default NCard
