package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.NFTInfo;
import com.ssafy.purgae.database.repository.NFTRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service("nftService")
@RequiredArgsConstructor
@Transactional
public class NFTServiceImpl implements NFTService {
    @Autowired
    NFTRepository nftRepository;

//    public List<NFTInfo> getUserNFT(long userId) {
//        List<NFTInfo> result = nftRepository.findByUserId(userId);
//
//        return result;
//    }

    @Override
    public NFTInfo saveNFTInfo(NFTInfo nftInfo) {
        try {
            nftRepository.save(nftInfo);
            return nftInfo;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<NFTInfo> getNFT() {
        List<NFTInfo> result = nftRepository.findAll();
        return result;
    }

//    @Override
//    public boolean canDonate(long userId) {
//        List<NFTInfo> list = nftRepository.findByUserIdAndCreatedAt(userId, LocalDate.now());
//        if (list.size() < 10) {
//            return true;
//        }
//        return false;
//    }

//    @Override
//    public NFTInfo updateNFTInfo(long userId, long NFTId) {
//        NFTInfo nft = nftRepository.findFirstByNFTId(NFTId);
//        if(nft != null && nft.getUserId() == -1){
//            nft.setUserId(userId);
//            nft.setCreatedAt(LocalDate.now());
//            nftRepository.save(nft);
//            return nft;
//        }else{
//            return null;
//        }
//    }
//
    @Override
    public boolean deleteNFTInfo(long NFTId) {
        int tmp = nftRepository.deleteByNFTId(NFTId);
        if(tmp == 1){
            return true;
        }else{
            return false;
        }
    }
}
