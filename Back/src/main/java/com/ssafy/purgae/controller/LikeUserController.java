package com.ssafy.purgae.controller;

import com.ssafy.purgae.database.entity.User;
import com.ssafy.purgae.service.LikeUserService;
import com.ssafy.purgae.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @PostMapping("")
    public ResponseEntity<Map<String,Object>> likeUser(@RequestBody Map<String, Object> reqData){
        Map<String, Object> result = new HashMap<>();
        long fromUserId = Long.valueOf((int)reqData.get("fromUser"));
        long toUserId = Long.valueOf((int)reqData.get("toUser"));

        if(likeUserService.likeUser(fromUserId, toUserId)){
            result.put("message", SUCCESS);
        }else{
            result.put("message", FAIL);
        }

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/follower/{userId}")
    public ResponseEntity<Map<String,Object>> getFollower(@PathVariable long userId){
        Map<String, Object> result = new HashMap<>();
        System.out.println(userId);
        User user = userService.getUserInfoById(userId);
        List<User> likeUsers = likeUserService.getFollower(user);
        if(likeUsers != null){
            result.put("message", SUCCESS);
            result.put("follower", likeUsers);
        }else {
            result.put("message", FAIL);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
