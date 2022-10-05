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

    public NFTInfo findFirstByNFTId(long nftId);

    public List<NFTInfo> findAll();

    public int deleteByNFTId(long NFTId);

}
