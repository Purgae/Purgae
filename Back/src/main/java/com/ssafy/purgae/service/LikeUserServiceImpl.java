package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.LikeUser;
import com.ssafy.purgae.database.entity.User;
import com.ssafy.purgae.database.repository.LikeRepository;
import com.ssafy.purgae.database.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service("likeUserService")
@RequiredArgsConstructor
@Transactional
public class LikeUserServiceImpl implements LikeUserService{

    @Autowired
    LikeRepository likeRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public boolean likeUser(long fromUserId, long toUserId) {
        User fromUser = userRepository.findFirstById(fromUserId);
        User toUser = userRepository.findFirstById(toUserId);
        if(fromUser == null || toUser == null){
            return false;
        }
        LikeUser likeUser = new LikeUser();
        likeUser.setFromUser(fromUser);
        likeUser.setToUser(toUser);

        likeRepository.save(likeUser);
        return true;
    }

    @Override
    public List<User> getFollower(User user) {
        List<LikeUser> likeUsers = likeRepository.findAllByToUser(user);
//        System.out.println(likeUsers);
        List<User> result = new ArrayList<>();

        for(int i=0;i<likeUsers.size();i++){
            result.add(userRepository.findFirstById(likeUsers.get(i).getFromUser().getId()));
        }
        return result;
    }
}
