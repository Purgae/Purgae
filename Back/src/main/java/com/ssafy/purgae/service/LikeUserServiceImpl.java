package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.FollowerInfo;
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
    public String checkLike(long fromUserId, long toUserId) {
        User fromUser = userRepository.findFirstById(fromUserId);
        User toUser = userRepository.findFirstById(toUserId);

        if(fromUser == null || toUser == null){
            return "fail";
        }

        LikeUser user = likeRepository.findByFromUserAndToUser(fromUser, toUser);

        if(user != null){
            return "true";
        }else {
            return "false";
        }
    }

    @Override
    public String likeUser(long fromUserId, long toUserId) {
        User fromUser = userRepository.findFirstById(fromUserId);
        User toUser = userRepository.findFirstById(toUserId);
        if(fromUser == null || toUser == null){
            return "fail";
        }
        LikeUser user = likeRepository.findByFromUserAndToUser(fromUser, toUser);
        System.out.println(user);
        if(user != null){
            likeRepository.delete(user);
            return "unfollow";
        }else {
            LikeUser likeUser = new LikeUser();
            likeUser.setFromUser(fromUser);
            likeUser.setToUser(toUser);
            likeRepository.save(likeUser);
            return "follow";
        }

    }

    @Override
    public List<FollowerInfo> getFollower(User user, int pageNum) {
        List<LikeUser> likeUsers = likeRepository.findAllByToUser(user);
//        System.out.println(likeUsers);
        List<FollowerInfo> result = new ArrayList<>();
        int max = 7*pageNum+7;
        if(max>=likeUsers.size()){
            max = likeUsers.size();
        }

        for(int i=7*pageNum;i<max;i++){
            User follower = userRepository.findFirstById(likeUsers.get(i).getFromUser().getId());
            boolean isFollowing = false;
            List<LikeUser> likeUser = likeRepository.findAllByToUser(follower);

            for(int j=0;j<likeUser.size();j++){
                if(likeUser.get(j).getFromUser().getId()==user.getId()){
                    isFollowing = true;
                }
            }

            result.add(new FollowerInfo(follower,isFollowing));
        }



        return result;
    }

    @Override
    public List<User> getFollowing(User user, int pageNum) {
        List<LikeUser> likeUsers = likeRepository.findAllByFromUser(user);
//        System.out.println(likeUsers);
        List<User> result = new ArrayList<>();
        int max = 7*pageNum+7;
        if(max>=likeUsers.size()){
            max = likeUsers.size();
        }

        for(int i=7*pageNum;i<max;i++){
            result.add(userRepository.findFirstById(likeUsers.get(i).getToUser().getId()));
        }
        return result;
    }
}
