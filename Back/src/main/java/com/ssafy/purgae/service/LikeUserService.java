package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.User;

import java.util.List;

public interface LikeUserService {

    public String likeUser(long fromUserId, long toUserId);

    public List<User> getFollower(User user);

    public List<User> getFollowing(User user);
}
