package com.ssafy.purgae.database.repository;

import com.ssafy.purgae.database.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    public User findFirstByNickname(String nickname);

    public User findFirstByWalletAddress(String walletAddress);

}
