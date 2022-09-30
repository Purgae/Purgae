package com.ssafy.purgae.database.repository;

import com.ssafy.purgae.database.entity.NFTInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface NFTRepository extends JpaRepository<NFTInfo, Long> {

    public List<NFTInfo> findByUserId(long userId);

    public NFTInfo findFirstByNFTId(long nftId);

    public List<NFTInfo> findAll();

    public List<NFTInfo> findByUserIdAndCreatedAt(long userId, LocalDate createdAt);

}
