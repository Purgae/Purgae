package com.ssafy.purgae.database.repository;

import com.ssafy.purgae.database.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    public User findFirstByUserId(String inputId);


}
