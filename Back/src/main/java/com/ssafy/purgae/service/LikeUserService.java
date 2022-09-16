package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.FollowerInfo;
import com.ssafy.purgae.database.entity.User;

import java.util.List;

public interface LikeUserService {

    public String likeUser(long fromUserId, long toUserId);

    public List<FollowerInfo> getFollower(User user, int pageNum);

    public List<User> getFollowing(User user, int pageNum);
}
