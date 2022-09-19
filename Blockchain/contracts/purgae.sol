// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract Minting is ERC721URIStorage{

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address public owner;

    constructor() ERC721("CResearch", "CNR") {
        owner = msg.sender;
    }

    struct NFT {
        string metaHash;
        address owner;
        address firstPublisher;
        bool dolphin;
    }
    
    mapping (uint256 => NFT) NFTInfo;

    function mintingNFT(string memory _input) public {

        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender,newItemId);
        
        NFT storage nft = NFTInfo[newItemId];
        nft.metaHash = _input;
        nft.owner = msg.sender;
        nft.firstPublisher = msg.sender;
        nft.dolphin = false;
        
        _setTokenURI(newItemId, _input);
    }

    function mintingManyNFT(string[] memory _input) public {
        for(uint256 i=0;i<_input.length;i++){
            mintingNFT(_input[i]);
        }
    }

    function viewNFT(uint256 key) public view returns (string memory, address, address, bool) {
        return (NFTInfo[key].metaHash, NFTInfo[key].owner, NFTInfo[key].firstPublisher, NFTInfo[key].dolphin);
    }

    function transferNFT(uint256 _id, address _buyer) public payable {
        NFTInfo[_id].owner = _buyer;
        payable(owner).transfer(msg.value);
    }
}
