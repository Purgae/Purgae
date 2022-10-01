package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.UserMapping;
import com.ssafy.purgae.database.entity.rankingDonation;
import com.ssafy.purgae.database.entity.rankingDonationReq;
import com.ssafy.purgae.database.entity.rankingUser;

import java.util.List;


public interface RankingService {
    public List<UserMapping> getTop10GameScore();
    public List<rankingUser> getTop10Like();
    public List<rankingDonationReq> getTop10Donation();
}
