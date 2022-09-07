package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.User;
import com.ssafy.purgae.database.entity.UserMapping;
import com.ssafy.purgae.database.entity.rankingUser;
import com.ssafy.purgae.database.repository.LikeRepository;
import com.ssafy.purgae.database.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("rankingService")
@RequiredArgsConstructor
@Transactional
public class RankingServiceImpl implements RankingService{
    @Autowired
    UserRepository userRepository;
    LikeRepository likeRepository;

    @Override
    public List<UserMapping> getTop10GameScore() {
        List<UserMapping> gameTop10 = userRepository.findTop10ByOrderByGameScoreDesc();


        return gameTop10;
    }

    @Override
    public List<rankingUser> getTop10Like() {
        System.out.println(likeRepository.getLikeRanking());
        List<rankingUser> likeTop10 = likeRepository.getLikeRanking();
        return likeTop10;
    }
}
