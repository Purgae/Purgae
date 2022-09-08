package com.ssafy.purgae.database.entity;

import lombok.Getter;

@Getter
public class rankingUser {
    User toUser;
    Long countLike;

    public rankingUser(User toUser, Long countLike){
        this.toUser = toUser;
        this.countLike = countLike;
    }

}
