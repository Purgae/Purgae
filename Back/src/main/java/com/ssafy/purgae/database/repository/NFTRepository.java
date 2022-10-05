package com.ssafy.purgae.database.repository;

import com.ssafy.purgae.database.entity.NFTInfo;
import com.ssafy.purgae.database.entity.rankingDonation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface NFTRepository extends JpaRepository<NFTInfo, Long> {

//    public List<NFTInfo> findByUserId(long userId);
//
    public NFTInfo findFirstByNFTId(long nftId);

    public List<NFTInfo> findAll();

//    public List<NFTInfo> findByUserIdAndCreatedAt(long userId, LocalDate createdAt);
//
//    @Query("SELECT new com.ssafy.purgae.database.entity.rankingDonation(l.userId, COUNT(l.NFTId)) FROM NFTInfo as l WHERE l.userId > 0 GROUP BY l.userId ORDER BY COUNT(l.NFTId) DESC")
//    public List<rankingDonation> findDonationUserWithJPQL();
//
    public int deleteByNFTId(long NFTId);

}
