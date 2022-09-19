// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract Minting is ERC721{

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
        uint updated_at;
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
        nft.updated_at = block.timestamp;
    }


    function mintingManyNFT(string[] memory _input) public {
        for(uint256 i=0;i<_input.length;i++){
            mintingNFT(_input[i]);
        }
    }


    function viewNFT(uint256 key) public view returns (string memory, address, address, bool, uint) {
        return (NFTInfo[key].metaHash, NFTInfo[key].owner, NFTInfo[key].firstPublisher, NFTInfo[key].dolphin, NFTInfo[key].updated_at);
    }

    

    function transferNFT(uint256 _id, address _seller, address _buyer) public payable {
        require(ownerOf(_id)==_seller, "no Approval");
        _transfer(ownerOf(_id), _buyer, _id);
        NFTInfo[_id].owner = _buyer;
        NFTInfo[_id].updated_at = block.timestamp;
        uint256 total = msg.value;
        payable(_seller).transfer((total/10)*9);
        payable(owner).transfer(total/10);
    }

    string[] todayNFT;
    function viewTodayNFT() public returns(string[] memory) {
        todayNFT = [""];
        todayNFT.pop();
        uint nowTime = block.timestamp;
        
        for(uint i=1; i<=_tokenIds.current(); i++){
            if((nowTime - NFTInfo[i].updated_at) < 86400){
                todayNFT.push(NFTInfo[i].metaHash);
            }
        }
        return (todayNFT);
    }

    function testTime(uint256 _id) public {
        NFTInfo[_id].updated_at = 123;
    }

    string[] myNFT;
    function myNFTView(address inputOwner) public returns(string[] memory){
        myNFT = [""];
        myNFT.pop();
        for(uint i=1; i<=_tokenIds.current(); i++){
            if(NFTInfo[i].owner == inputOwner){
                myNFT.push(NFTInfo[i].metaHash);
            }
        }

        return (myNFT);
    }

    

}