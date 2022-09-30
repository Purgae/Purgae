package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.UserMapping;
import com.ssafy.purgae.database.entity.rankingDonation;
import com.ssafy.purgae.database.entity.rankingDonationReq;
import com.ssafy.purgae.database.entity.rankingUser;
import com.ssafy.purgae.database.repository.LikeRepository;
import com.ssafy.purgae.database.repository.NFTRepository;
import com.ssafy.purgae.database.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
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

    @Override
    public List<rankingDonationReq> getTop10Donation() {
        List<rankingDonation> donationTop10 = nftRepository.findDonationUserWithJPQL();
        List<rankingDonationReq> userlist = new ArrayList<>();
        for(int i = 0; i<donationTop10.size(); i++){
            userlist.add(new rankingDonationReq(userRepository.findFirstById(donationTop10.get(i).getUserId()), donationTop10.get(i).getCountDonation()));
        }
        return userlist;
    }
}
