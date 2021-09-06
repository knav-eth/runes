/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NPath, NPathInterface } from "../NPath";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "bool",
        name: "onlyNHolders",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_N_TOKEN_ID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mintWithN",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "n",
    outputs: [
      {
        internalType: "contract IN",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "onlyNHolders",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620024df380380620024df83398101604081905262000034916200026b565b82828282827305a46f1e545526fb803ff974c790acea34d1f2d68383838160009080519060200190620000699291906200010e565b5080516200007f9060019060208401906200010e565b50506001600a55506200009233620000bc565b60609190911b6001600160601b031916608052151560f81b60a05250620003429650505050505050565b600b80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200011c90620002ef565b90600052602060002090601f0160209004810192826200014057600085556200018b565b82601f106200015b57805160ff19168380011785556200018b565b828001600101855582156200018b579182015b828111156200018b5782518255916020019190600101906200016e565b50620001999291506200019d565b5090565b5b808211156200019957600081556001016200019e565b600082601f830112620001c657600080fd5b81516001600160401b0380821115620001e357620001e36200032c565b604051601f8301601f19908116603f011681019082821181831017156200020e576200020e6200032c565b816040528381526020925086838588010111156200022b57600080fd5b600091505b838210156200024f578582018301518183018401529082019062000230565b83821115620002615760008385830101525b9695505050505050565b6000806000606084860312156200028157600080fd5b83516001600160401b03808211156200029957600080fd5b620002a787838801620001b4565b94506020860151915080821115620002be57600080fd5b50620002cd86828701620001b4565b92505060408401518015158114620002e457600080fd5b809150509250925092565b600181811c908216806200030457607f821691505b602082108114156200032657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b60805160601c60a05160f81c6121636200037c600039600081816103590152610ccc0152600081816102a501526106d601526121636000f3fe60806040526004361061018b5760003560e01c80636a4c19d9116100d6578063a22cb4651161007f578063c87b56dd11610059578063c87b56dd1461044c578063e985e9c51461046c578063f2fde38b146104b557600080fd5b8063a22cb465146103f6578063ae5a583f14610416578063b88d4fde1461042c57600080fd5b80638da5cb5b116100b05780638da5cb5b146103b057806395d89b41146103ce578063a0712d68146103e357600080fd5b80636a4c19d91461034757806370a082311461037b578063715018a61461039b57600080fd5b806323b872dd1161013857806342842e0e1161011257806342842e0e146102e75780634f6ccce7146103075780636352211e1461032757600080fd5b806323b872dd146102735780632e52d606146102935780632f745c59146102c757600080fd5b80630860b12c116101695780630860b12c1461021f578063095ea7b31461023457806318160ddd1461025457600080fd5b806301ffc9a71461019057806306fdde03146101c5578063081812fc146101e7575b600080fd5b34801561019c57600080fd5b506101b06101ab366004611e52565b6104d5565b60405190151581526020015b60405180910390f35b3480156101d157600080fd5b506101da610519565b6040516101bc9190611f64565b3480156101f357600080fd5b50610207610202366004611e8c565b6105ab565b6040516001600160a01b0390911681526020016101bc565b61023261022d366004611e8c565b610645565b005b34801561024057600080fd5b5061023261024f366004611e26565b6107b8565b34801561026057600080fd5b506008545b6040519081526020016101bc565b34801561027f57600080fd5b5061023261028e366004611cd2565b6108ea565b34801561029f57600080fd5b506102077f000000000000000000000000000000000000000000000000000000000000000081565b3480156102d357600080fd5b506102656102e2366004611e26565b610971565b3480156102f357600080fd5b50610232610302366004611cd2565b610a19565b34801561031357600080fd5b50610265610322366004611e8c565b610a34565b34801561033357600080fd5b50610207610342366004611e8c565b610ad8565b34801561035357600080fd5b506101b07f000000000000000000000000000000000000000000000000000000000000000081565b34801561038757600080fd5b50610265610396366004611c5f565b610b63565b3480156103a757600080fd5b50610232610bfd565b3480156103bc57600080fd5b50600b546001600160a01b0316610207565b3480156103da57600080fd5b506101da610c63565b6102326103f1366004611e8c565b610c72565b34801561040257600080fd5b50610232610411366004611df3565b610d89565b34801561042257600080fd5b506102656122b881565b34801561043857600080fd5b50610232610447366004611d13565b610e4e565b34801561045857600080fd5b506101da610467366004611e8c565b610edc565b34801561047857600080fd5b506101b0610487366004611c99565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b3480156104c157600080fd5b506102326104d0366004611c5f565b610fc5565b60006001600160e01b031982167f780e9d630000000000000000000000000000000000000000000000000000000014806105135750610513826110a7565b92915050565b60606000805461052890611fe6565b80601f016020809104026020016040519081016040528092919081815260200182805461055490611fe6565b80156105a15780601f10610576576101008083540402835291602001916105a1565b820191906000526020600020905b81548152906001019060200180831161058457829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166106295760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b6002600a5414156106985760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610620565b6002600a556040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810182905233906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636352211e9060240160206040518083038186803b15801561071857600080fd5b505afa15801561072c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107509190611c7c565b6001600160a01b0316146107a65760405162461bcd60e51b815260206004820152601360248201527f4e506173733a494e56414c49445f4f574e4552000000000000000000000000006044820152606401610620565b6107b03382611142565b506001600a55565b60006107c382610ad8565b9050806001600160a01b0316836001600160a01b0316141561084d5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610620565b336001600160a01b038216148061086957506108698133610487565b6108db5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610620565b6108e58383611160565b505050565b6108f433826111db565b6109665760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610620565b6108e58383836112d2565b600061097c83610b63565b82106109f05760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e64730000000000000000000000000000000000000000006064820152608401610620565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6108e583838360405180602001604052806000815250610e4e565b6000610a3f60085490565b8210610ab35760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e647300000000000000000000000000000000000000006064820152608401610620565b60088281548110610ac657610ac6612092565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b0316806105135760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e00000000000000000000000000000000000000000000006064820152608401610620565b60006001600160a01b038216610be15760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f2061646472657373000000000000000000000000000000000000000000006064820152608401610620565b506001600160a01b031660009081526003602052604090205490565b600b546001600160a01b03163314610c575760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610620565b610c6160006114b7565b565b60606001805461052890611fe6565b6002600a541415610cc55760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610620565b6002600a557f000000000000000000000000000000000000000000000000000000000000000015610d385760405162461bcd60e51b815260206004820152601b60248201527f4e506173733a4f50454e5f4d494e54494e475f44495341424c454400000000006044820152606401610620565b6122b881116107a65760405162461bcd60e51b815260206004820152601060248201527f4e506173733a494e56414c49445f4944000000000000000000000000000000006044820152606401610620565b6001600160a01b038216331415610de25760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610620565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610e5833836111db565b610eca5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610620565b610ed684848484611516565b50505050565b6000818152600260205260409020546060906001600160a01b0316610f695760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006064820152608401610620565b6000610f73611594565b90506000815111610f935760405180602001604052806000815250610fbe565b80610f9d846115b4565b604051602001610fae929190611ed1565b6040516020818303038152906040525b9392505050565b600b546001600160a01b0316331461101f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610620565b6001600160a01b03811661109b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610620565b6110a4816114b7565b50565b60006001600160e01b031982167f80ac58cd00000000000000000000000000000000000000000000000000000000148061110a57506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061051357507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b0319831614610513565b61115c8282604051806020016040528060008152506116e6565b5050565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03841690811790915581906111a282610ad8565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166112545760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610620565b600061125f83610ad8565b9050806001600160a01b0316846001600160a01b0316148061129a5750836001600160a01b031661128f846105ab565b6001600160a01b0316145b806112ca57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166112e582610ad8565b6001600160a01b0316146113615760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e00000000000000000000000000000000000000000000006064820152608401610620565b6001600160a01b0382166113dc5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610620565b6113e7838383611764565b6113f2600082611160565b6001600160a01b038316600090815260036020526040812080546001929061141b908490611fa3565b90915550506001600160a01b0382166000908152600360205260408120805460019290611449908490611f77565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600b80546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6115218484846112d2565b61152d8484848461181c565b610ed65760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608401610620565b60606040518060800160405280604481526020016120ea60449139905090565b6060816115f457505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b811561161e578061160881612021565b91506116179050600a83611f8f565b91506115f8565b60008167ffffffffffffffff811115611639576116396120a8565b6040519080825280601f01601f191660200182016040528015611663576020820181803683370190505b5090505b84156112ca57611678600183611fa3565b9150611685600a8661203c565b611690906030611f77565b60f81b8183815181106116a5576116a5612092565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506116df600a86611f8f565b9450611667565b6116f08383611974565b6116fd600084848461181c565b6108e55760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608401610620565b6001600160a01b0383166117bf576117ba81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6117e2565b816001600160a01b0316836001600160a01b0316146117e2576117e28382611acf565b6001600160a01b0382166117f9576108e581611b6c565b826001600160a01b0316826001600160a01b0316146108e5576108e58282611c1b565b60006001600160a01b0384163b1561196957604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611860903390899088908890600401611f28565b602060405180830381600087803b15801561187a57600080fd5b505af19250505080156118aa575060408051601f3d908101601f191682019092526118a791810190611e6f565b60015b61194f573d8080156118d8576040519150601f19603f3d011682016040523d82523d6000602084013e6118dd565b606091505b5080516119475760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608401610620565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506112ca565b506001949350505050565b6001600160a01b0382166119ca5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610620565b6000818152600260205260409020546001600160a01b031615611a2f5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610620565b611a3b60008383611764565b6001600160a01b0382166000908152600360205260408120805460019290611a64908490611f77565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001611adc84610b63565b611ae69190611fa3565b600083815260076020526040902054909150808214611b39576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090611b7e90600190611fa3565b60008381526009602052604081205460088054939450909284908110611ba657611ba6612092565b906000526020600020015490508060088381548110611bc757611bc7612092565b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611bff57611bff61207c565b6001900381819060005260206000200160009055905550505050565b6000611c2683610b63565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b600060208284031215611c7157600080fd5b8135610fbe816120be565b600060208284031215611c8e57600080fd5b8151610fbe816120be565b60008060408385031215611cac57600080fd5b8235611cb7816120be565b91506020830135611cc7816120be565b809150509250929050565b600080600060608486031215611ce757600080fd5b8335611cf2816120be565b92506020840135611d02816120be565b929592945050506040919091013590565b60008060008060808587031215611d2957600080fd5b8435611d34816120be565b93506020850135611d44816120be565b925060408501359150606085013567ffffffffffffffff80821115611d6857600080fd5b818701915087601f830112611d7c57600080fd5b813581811115611d8e57611d8e6120a8565b604051601f8201601f19908116603f01168101908382118183101715611db657611db66120a8565b816040528281528a6020848701011115611dcf57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215611e0657600080fd5b8235611e11816120be565b915060208301358015158114611cc757600080fd5b60008060408385031215611e3957600080fd5b8235611e44816120be565b946020939093013593505050565b600060208284031215611e6457600080fd5b8135610fbe816120d3565b600060208284031215611e8157600080fd5b8151610fbe816120d3565b600060208284031215611e9e57600080fd5b5035919050565b60008151808452611ebd816020860160208601611fba565b601f01601f19169290920160200192915050565b60008351611ee3818460208801611fba565b835190830190611ef7818360208801611fba565b7f2e6a736f6e0000000000000000000000000000000000000000000000000000009101908152600501949350505050565b60006001600160a01b03808716835280861660208401525083604083015260806060830152611f5a6080830184611ea5565b9695505050505050565b602081526000610fbe6020830184611ea5565b60008219821115611f8a57611f8a612050565b500190565b600082611f9e57611f9e612066565b500490565b600082821015611fb557611fb5612050565b500390565b60005b83811015611fd5578181015183820152602001611fbd565b83811115610ed65750506000910152565b600181811c90821680611ffa57607f821691505b6020821081141561201b57634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561203557612035612050565b5060010190565b60008261204b5761204b612066565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146110a457600080fd5b6001600160e01b0319811681146110a457600080fdfe68747470733a2f2f697066732e696f2f697066732f516d626677334e74555877386b5839456f4565665773774e6f626a546165774543654e61366974516950524e4e742fa264697066735822122053e373de129a147c00f646c10b013c2baff593b5833ccc173ee2c7eb47973d1864736f6c63430008060033";

export class NPath__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    onlyNHolders: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NPath> {
    return super.deploy(
      name,
      symbol,
      onlyNHolders,
      overrides || {}
    ) as Promise<NPath>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    onlyNHolders: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      onlyNHolders,
      overrides || {}
    );
  }
  attach(address: string): NPath {
    return super.attach(address) as NPath;
  }
  connect(signer: Signer): NPath__factory {
    return super.connect(signer) as NPath__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NPathInterface {
    return new utils.Interface(_abi) as NPathInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NPath {
    return new Contract(address, _abi, signerOrProvider) as NPath;
  }
}
