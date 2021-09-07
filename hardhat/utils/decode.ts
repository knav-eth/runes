const abiDecoder = require("abi-decoder")

export type DecodedParam = {
  name: string
  type: string
  value: string
}

export type DecodeResult = {
  name: string
  params: Array<DecodedParam>
}

export function decodeTransactionData(abi: Array<any>, data: string): DecodeResult {
  abiDecoder.addABI(abi)
  return abiDecoder.decodeMethod(data)
}
