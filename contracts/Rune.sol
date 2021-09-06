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

    constructor() NPass("Rune", "RUNE", true) {}

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(),".json")) : "";
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "https://ipfs.io/ipfs/Qmbfw3NtUXw8kX9EoEefWswNobjTaewECeNa6itQiPRNNt/";
    }
}
