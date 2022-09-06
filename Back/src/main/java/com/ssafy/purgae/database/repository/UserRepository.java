package com.ssafy.purgae.database.repository;

import com.ssafy.purgae.database.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    public User findFirstById(long id);

    public User findFirstByNickname(String nickname);

    public User findFirstByWalletAddress(String walletAddress);

    @Modifying
    @Transactional
    @Query("UPDATE User as u " +
            "SET u.profileImage = :profileImage " +
            "WHERE u.id = :userId")
    public int updateProfileImage(@Param("userId") long userId, @Param("profileImage") String profileImage);

//    @Query("UPDATE User as u " +
//            "SET u.profileImage = :profileImage, u.nickname = :nickname " +
//            "WHERE u.id = :userId")
//    public int updateUser(@Param("userId") long userId, @Param("profileImage") String profileImage, @Param("nickname") String nickname);
}
