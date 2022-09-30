package com.ssafy.purgae.database.entity;

import lombok.Getter;

@Getter
public class rankingDonationReq {
    User user;
    Long countDonation;

    public rankingDonationReq(User user, Long countDonation){
        this.user = user;
        this.countDonation = countDonation;
    }
}
