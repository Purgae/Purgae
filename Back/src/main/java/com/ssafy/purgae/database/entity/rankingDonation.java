package com.ssafy.purgae.database.entity;

import lombok.Getter;

@Getter
public class rankingDonation {
    Long userId;
    Long countDonation;

    public rankingDonation(Long userId, Long countDonation){
        this.userId = userId;
        this.countDonation = countDonation;
    }
}
