package com.ssafy.purgae.database.repository;

import com.ssafy.purgae.database.entity.LikeUser;
import com.ssafy.purgae.database.entity.User;
import com.ssafy.purgae.database.entity.rankingUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikeRepository extends JpaRepository<LikeUser, Long> {

    public List<LikeUser> findAllByToUser(User toUser);

    @Query("SELECT new com.ssafy.purgae.database.entity.rankingUser(l.toUser, COUNT(l.fromUser)) FROM LikeUser as l GROUP BY l.toUser ORDER BY COUNT(l.fromUser) DESC")
    public List<rankingUser> findLikeUserWithJPQL();

    public List<LikeUser> findAllByFromUser(User fromUser);

    public LikeUser findByFromUserAndToUser(User fromUser, User toUser);

}
