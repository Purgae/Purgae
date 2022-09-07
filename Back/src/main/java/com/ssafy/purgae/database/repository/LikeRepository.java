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

    @Query(nativeQuery = true,
            value = "select l.toUser, count(l.fromUser) from LikeUser as l group by l.toUser order by count(l.fromUser) desc")
    public List<rankingUser> getLikeRanking();
    public List<LikeUser> findAllByFromUser(User fromUser);

    public LikeUser findByFromUserAndToUser(User fromUser, User toUser);

//    @Query("select l from LikeUser l where l.toUser =:toUser")
//    public List<LikeUser> getFollower(long toUser);
}
