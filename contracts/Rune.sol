//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "./core/NPass.sol";

/**
 * @title nPath contract
 * @author @KnavETH
 * @notice This contract allows n-project holders to mint an nPath
 */
contract Rune is NPass {
    using Strings for uint256;

    constructor(address _nContractAddress) NPass(_nContractAddress, "Rune", "RUNE", true) {}

    constant string[] COORDINATE_MAPPING = [
        "250.1 67.9",
        "325 83.8",
        "386.9 128.9",
        "425.2 195.3",
        "433.1 271.5",
        "409.3 344.3",
        "357.9 401.1",
        "287.8 432.1",
        "211.2 431.9",
        "141.4 400.5",
        "90.3 343.4",
        "66.9 270.4",
        "75.3 194.3",
        "113.9 128.1",
        "176.1 83.4"
    ];

    constant string RUNE_BASE_START = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500px"><style>@keyframes offset { to { stroke-dashoffset: 0; } } .line { stroke-dasharray: 2583; stroke-dashoffset: 2583; animation-delay: 2s; animation: offset 8s ease-in-out forwards; }</style><g id="background"><rect width="500" height="500" fill="#000000"/></g><g id="circle"><circle cx="250.1" cy="252" r="184.1" fill="none" stroke="#fff" stroke-miterlimit="10"/></g><g id="dots"><circle cx="250.1" cy="67.9" r="4.7" fill="#fff"/><circle cx="325" cy="83.8" r="4.7" fill="#fff"/><circle cx="386.9" cy="128.9" r="4.7" fill="#fff"/><circle cx="425.2" cy="195.3" r="4.7" fill="#fff"/><circle cx="433.1" cy="271.5" r="4.7" fill="#fff"/><circle cx="409.3" cy="344.3" r="4.7" fill="#fff"/><circle cx="357.9" cy="401.1" r="4.7" fill="#fff"/><circle cx="287.8" cy="432.1" r="4.7" fill="#fff"/><circle cx="211.2" cy="431.9" r="4.7" fill="#fff"/><circle cx="141.4" cy="400.5" r="4.7" fill="#fff"/><circle cx="90.3" cy="343.4" r="4.7" fill="#fff"/><circle cx="66.9" cy="270.4" r="4.7" fill="#fff"/><circle cx="75.3" cy="194.3" r="4.7" fill="#fff"/><circle cx="113.9" cy="128.1" r="4.7" fill="#fff"/><circle cx="176.1" cy="83.4" r="4.7" fill="#fff"/></g><g id="path"><polyline class="line" points="'
    constant string RUNE_BASE_END = '" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'

    function tokenSVG(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string[10] memory parts;
        parts[0] = RUNE_BASE_START;
        parts[1] = COORDINATE_MAPPING[getFirst(tokenId)];
        parts[2] = COORDINATE_MAPPING[getSecond(tokenId)];
        parts[3] = COORDINATE_MAPPING[getThird(tokenId)];
        parts[4] = COORDINATE_MAPPING[getFourth(tokenId)];
        parts[5] = COORDINATE_MAPPING[getFifth(tokenId)];
        parts[6] = COORDINATE_MAPPING[getSixth(tokenId)];
        parts[7] = COORDINATE_MAPPING[getSeventh(tokenId)];
        parts[8] = COORDINATE_MAPPING[getEight(tokenId)];
        parts[9] = RUNE_BASE_START;

        string memory output = string(
            abi.encodePacked(parts[0], parts[1], parts[2], parts[3], parts[4], parts[5], parts[6], parts[7], parts[8])
        );
        output = string(abi.encodePacked(output, parts[9]));
        return output;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory svg = tokenSVG(tokenId)

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "Rune #',
                        toString(tokenId),
                        '", "description": "N is just numbers.", "image": "data:image/svg+xml;base64,',
                        Base64.encode(bytes(svg)),
                        '"}'
                    )
                )
            )
        );
        output = string(abi.encodePacked("data:application/json;base64,", json));

        return output;
    }
}
