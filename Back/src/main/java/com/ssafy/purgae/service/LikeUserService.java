package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.User;

import java.util.List;

public interface LikeUserService {

    public boolean likeUser(long fromUserId, long toUserId);

    public List<User> getFollower(User user);
}
