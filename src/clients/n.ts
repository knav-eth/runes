import { gql, GraphQLClient } from "graphql-request"
import { getNGraphUrl } from "../utils/network"

export type SubgraphN = {
  id: string
  owner: string
  name: string
  first: number
  second: number
  third: number
  fourth: number
  fifth: number
  sixth: number
  seventh: number
  eighth: number
  numbers: Array<number>
  metadataURI: string
}

const N_FRAGMENT = `
  id
  owner
  name
  first
  second
  third
  fourth
  fifth
  sixth
  seventh
  eighth
  numbers
  metadataURI
`

type GetNResponse = {
  n: SubgraphN
}

export async function getNById(tokenId: number): Promise<SubgraphN | undefined> {
  const query = gql`
      query getNById($tokenId: Int!) {
          n(id: $tokenId) {
              ${N_FRAGMENT}
          }
      }
  `
  const variables = {
    tokenId,
  }
  const client = new GraphQLClient(getNGraphUrl())
  const data = await client.request<GetNResponse>(query, variables)
  return data?.n
}

type ListNResponse = {
  ns: Array<SubgraphN>
}

export async function getNsByOwner(walletAddress: string): Promise<Array<SubgraphN>> {
  const query = gql`
      query getNsByOwner($owner: String!) {
          ns(where: { owner: $owner }) {
              ${N_FRAGMENT}
          }
      }
  `
  const variables = {
    owner: walletAddress,
  }
  const client = new GraphQLClient(getNGraphUrl())
  const data = await client.request<ListNResponse>(query, variables)
  return data?.ns ?? []
}
