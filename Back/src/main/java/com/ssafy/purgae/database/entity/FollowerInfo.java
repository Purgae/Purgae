package com.ssafy.purgae.database.entity;

import lombok.Getter;

@Getter
public class FollowerInfo {

    User toUser;
    boolean isFollowing;

    public FollowerInfo(User toUser, boolean isFollowing){
        this.toUser = toUser;
        this.isFollowing = isFollowing;
    }
}
