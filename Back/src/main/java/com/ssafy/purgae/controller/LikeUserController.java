package com.ssafy.purgae.controller;

import com.ssafy.purgae.database.entity.FollowerInfo;
import com.ssafy.purgae.database.entity.User;
import com.ssafy.purgae.request.LikeReq;
import com.ssafy.purgae.service.LikeUserService;
import com.ssafy.purgae.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Api(tags = {"좋아요 API Controller"})
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/like")
public class LikeUserController {

    private static final String SUCCESS = "SUCCESS";
    private static final String FAIL = "FAIL";

    @Autowired
    LikeUserService likeUserService;
    @Autowired
    UserService userService;

    @ApiOperation(value = "좋아요/좋아요 취소", notes = "fromUser, toUser 요청으로 좋아요(이미 있다면 취소)")
    @PostMapping("")
    public ResponseEntity<Map<String,Object>> likeUser(@RequestBody LikeReq reqData){
        Map<String, Object> result = new HashMap<>();
        long fromUserId = reqData.getFromUser();
        long toUserId = reqData.getToUser();

        String tmp = likeUserService.likeUser(fromUserId, toUserId);
        if(tmp.equals("follow")){
            result.put("message", "follow");
        }else if(tmp.equals("unfollow")){
            result.put("message", "unfollow");
        }else{
            result.put("message", FAIL);
        }

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ApiOperation(value = "팔로워 목록", notes = "회원 Id 입력시 팔로워 목록")
    @GetMapping("/follower/{userId}/{pageNum}")
    public ResponseEntity<Map<String,Object>> getFollower(@PathVariable long userId, @PathVariable int pageNum){
        Map<String, Object> result = new HashMap<>();
        System.out.println(userId);
        User user = userService.getUserInfoById(userId);

        List<FollowerInfo> likeUsers = likeUserService.getFollower(user, pageNum);
        if(likeUsers != null){
            result.put("message", SUCCESS);
            result.put("follower", likeUsers);
        }else {
            result.put("message", FAIL);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ApiOperation(value = "팔로잉 목록", notes = "회원 Id 입력시 팔로잉 목록")
    @GetMapping("/following/{userId}/{pageNum}")
    public ResponseEntity<Map<String,Object>> getFollowing(@PathVariable long userId, int pageNum){
        Map<String, Object> result = new HashMap<>();
        System.out.println(userId);
        User user = userService.getUserInfoById(userId);
        List<User> likeUsers = likeUserService.getFollowing(user, pageNum);
        if(likeUsers != null){
            result.put("message", SUCCESS);
            result.put("following", likeUsers);
        }else {
            result.put("message", FAIL);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
