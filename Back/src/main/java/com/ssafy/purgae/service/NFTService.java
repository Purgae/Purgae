package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.NFTInfo;

import java.util.List;

public interface NFTService {

    public NFTInfo saveNFTInfo(NFTInfo nftInfo);

    public List<NFTInfo> getNFT();

    public boolean deleteNFTInfo(long NFTId);

}
