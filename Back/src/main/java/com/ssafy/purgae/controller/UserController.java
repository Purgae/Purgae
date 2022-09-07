package com.ssafy.purgae.controller;


import com.ssafy.purgae.database.entity.User;
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
@RequestMapping("/user")
public class UserController {

    private static final String SUCCESS = "SUCCESS";
    private static final String FAIL = "FAIL";

    @Autowired
    UserService userService;

    @GetMapping("/{nickname}")
    public ResponseEntity<Map<String, Object>> getUserInfo(@PathVariable String nickname) {
        Map<String, Object> result = new HashMap<>();
        User user = userService.getUserWalletAddress(nickname);
        User userDto = userService.getUserInfo(user.getWalletAddress());

        if (userDto != null) {
            result.put("message", SUCCESS);
            result.put("data", userDto);
        } else {
            result.put("message", FAIL);
        }

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String,Object>> login(@RequestBody Map<String, Object> reqData){
        Map<String, Object> result = new HashMap<>();
        List<Map<String,String>> NFTList = (List) reqData.get("nft");

        String walletAddress = (String) reqData.get("walletAddress");
        System.out.println(walletAddress);
        User user = userService.getUserInfo(walletAddress);
        boolean hasProfileImg = false;
        // 프로필 이미지 확인
        if(user != null && user.getProfileImage()!=null) {
            hasProfileImg = userService.checkNFT(NFTList, user.getProfileImage());
        }
        System.out.println(user);

        long cnt = userService.countUser();
        if(user == null){
            User newUser = new User();
            newUser.setNickname("회원"+(cnt+1));
            newUser.setWalletAddress(walletAddress);
            User tmp = userService.saveUser(newUser);
            if(tmp == null){
                result.put("message", FAIL);
                return new ResponseEntity<>(result, HttpStatus.NO_CONTENT);
            }
            result.put("data", tmp);
            result.put("message", SUCCESS);
        }else{

            if(hasProfileImg) {
                result.put("data", user);
                result.put("message", SUCCESS);
            }else{
                userService.updateProfileImg(user.getId(), null);
                User newUser = userService.getUserInfo(user.getWalletAddress());
                newUser.setProfileImage(null);
                result.put("data", newUser);
                result.put("message", SUCCESS);
            }
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping ("/modify/{nickname}")
    public ResponseEntity<Map<String, Object>> checkNickname(@PathVariable String nickname){
        Map<String, Object> result = new HashMap<>();

        if(userService.checkDuplicate(nickname)){
            result.put("errMsg","duplicate error");
            result.put("message", FAIL);
        }else{
            if(!userService.checkLength(nickname)){
                result.put("errMsg","length error");
                result.put("message", FAIL);
            }
            if(userService.checkSlang(nickname)){
                result.put("errMsg","slang error");
                result.put("message", FAIL);
            }
            if(userService.checkBlank(nickname)){
                result.put("errMsg","blank error");
                result.put("message", FAIL);
            }

            if(result.size() == 0){
                result.put("message", SUCCESS);

            }

        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping("{userId}")
    public ResponseEntity<Map<String, Object>> updateUser(@PathVariable long userId, @RequestBody Map<String, Object> reqData){
        Map<String, Object> result = new HashMap<>();

        String nickname = (String) reqData.get("nickname");
        String profileImage = (String) reqData.get("profileImage");
        boolean profilePublic = (boolean) reqData.get("profilePublic");

        userService.updateUserInfo(userId, nickname, profileImage, profilePublic);
        User newUser = userService.updateUserInfo(userId, nickname, profileImage, profilePublic);

        if(newUser != null){
            result.put("message",SUCCESS);
            result.put("data", newUser);
        }else{
            result.put("message", FAIL);
        }


        return new ResponseEntity<>(result,HttpStatus.OK);
    }

    @PutMapping("/score")
    public ResponseEntity<Map<String, Object>> updateGameScore(@RequestBody Map<String, Object> reqData){
        Map<String, Object> result = new HashMap<>();
        System.out.println(reqData.get("userId"));
        long userId = Long.valueOf((int)reqData.get("userId"));
        long gameScore = Long.valueOf((int)reqData.get("gameScore"));
        User newUser = userService.updateGameScore(userId, gameScore);

        if(newUser != null){
            result.put("message",SUCCESS);
            result.put("data", newUser);
        }else{
            result.put("message", FAIL);
        }

        return new ResponseEntity<>(result,HttpStatus.OK);
    }

}
