package com.ssafy.purgae.database.repository;

import com.ssafy.purgae.database.entity.NFTInfo;
import com.ssafy.purgae.database.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NFTRepository extends JpaRepository<NFTInfo, Long> {

    public List<NFTInfo> findByUserId(long userId);

    public List<NFTInfo> findAll();
}
