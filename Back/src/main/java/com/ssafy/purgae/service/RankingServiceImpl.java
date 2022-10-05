package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.UserMapping;
import com.ssafy.purgae.database.entity.rankingUser;
import com.ssafy.purgae.database.repository.LikeRepository;
import com.ssafy.purgae.database.repository.NFTRepository;
import com.ssafy.purgae.database.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("rankingService")
@RequiredArgsConstructor
@Transactional
public class RankingServiceImpl implements RankingService{
    private final UserRepository userRepository;
    private final LikeRepository likeRepository;

    private final NFTRepository nftRepository;

    @Override
    public List<UserMapping> getTop10GameScore() {
        List<UserMapping> gameTop10 = userRepository.findTop10ByOrderByGameScoreDesc();


        return gameTop10;
    }

    @Override
    public List<rankingUser> getTop10Like() {
        List<rankingUser> likeTop10 = likeRepository.findLikeUserWithJPQL();

        return likeTop10;
    }

}
