package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.NFTInfo;
import com.ssafy.purgae.database.repository.NFTRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("nftService")
@RequiredArgsConstructor
@Transactional
public class NFTServiceImpl implements NFTService{
    @Autowired
    NFTRepository nftRepository;

    public List<NFTInfo> getUserNFT(long userId){
        List<NFTInfo> result = nftRepository.findByUserId(userId);

        return result;
    }

    @Override
    public NFTInfo saveNFTInfo(NFTInfo nftInfo) {
        try{
            nftRepository.save(nftInfo);
            return nftInfo;
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<NFTInfo> getNFT() {
        List<NFTInfo> result = nftRepository.findAll();
        return result;
    }
}
