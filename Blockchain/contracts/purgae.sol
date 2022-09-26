// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract Minting is ERC721{

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address public owner;
    
    ERC721 erc;

    // Mapping from token ID to owner address
    mapping(uint256 => address) private _owners;

    // Mapping owner address to token count
    mapping(address => uint256) private _balances;

    constructor() ERC721("PurgaeNFTs", "PNFT") {
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
    // mapping (address => uint256[]) userNFT;
    mapping (uint256 => uint256) todayDonation;

    mapping (address => uint256) userDonation;

    mapping (address => string[]) userNFT;

    mapping (address => uint256[]) userNFTNum;

    mapping (string => uint256) NFTtoken;

    mapping (uint256 => string[]) todayNFT;


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
        
        
        userNFT[msg.sender].push(_input);
        userNFTNum[msg.sender].push(newItemId);
        _setTokenURI(newItemId, _input);    
        
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
        ERC721._transfer(_seller, _buyer, _id);
        for(uint i=0;i<userNFTNum[_seller].length;i++){
            if(userNFTNum[_seller][i] == _id){
                userNFTNum[_seller][i] = 0;
                userNFT[_seller][i] = "";
                break;
            }
        }
        userNFT[_buyer].push(NFTInfo[_id].metaHash);
        userNFTNum[_buyer].push(_id);
        
        NFTInfo[_id].owner = _buyer;
        NFTInfo[_id].updated_at = block.timestamp;
        
        todayNFT[block.timestamp/86400].push(NFTInfo[_id].metaHash);

        userDonation[_buyer] += msg.value;
        todayDonation[block.timestamp/86400] += msg.value;
        
        payable(_seller).transfer(msg.value);
    }


    function viewTodayNFT() public view returns(string[] memory) {
        
        return (todayNFT[block.timestamp/86400]);
    }

    function testTime(uint256 _id) public {
        NFTInfo[_id].updated_at = 123;
    }


    function viewMyNFT(address inputOwner) public view returns(string[] memory){
        
        return (userNFT[inputOwner]);
    }

    function viewMyDonation(address user) public view returns (uint256) {
        return userDonation[user];
    }

    function viewTodayDonation() public view returns (uint256) {
        uint256 time = block.timestamp/86400;
        return (todayDonation[time]);
    }

    function _transfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override{
        transferNFT(tokenId, from, to);
    }

    function getTime() public view returns(uint256) {
        return (block.timestamp/86400);
    }

    

}