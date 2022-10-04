package com.ssafy.purgae.controller;

import com.ssafy.purgae.database.entity.LikeUser;
import com.ssafy.purgae.database.entity.User;
import com.ssafy.purgae.database.repository.LikeRepository;
import com.ssafy.purgae.request.GameScoreReq;
import com.ssafy.purgae.request.UserReq;
import com.ssafy.purgae.request.UserUpdateReq;
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

@Api(tags = {"회원 API Controller"})
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {

    private static final String SUCCESS = "SUCCESS";
    private static final String FAIL = "FAIL";

    @Autowired
    UserService userService;

    @Autowired
    LikeRepository likeRepository;

    @ApiOperation(value = "로그인(회원추가)", notes = "지갑 주소로 로그인(최초 로그인시 회원추가)")
    @PostMapping("/login")
    public ResponseEntity<Map<String,Object>> login(@RequestBody UserReq reqData){
//        System.out.println("wallet : " + reqData.getWalletAddress());
//        System.out.println("nft : " + reqData.getNft();
        Map<String, Object> result = new HashMap<>();
        List<Map<String,String>> NFTList = reqData.getNft();

        System.out.println(NFTList.get(0));

        String walletAddress = reqData.getWalletAddress();
        System.out.println(walletAddress);
        User user = userService.getUserInfo(walletAddress);
        System.out.println(user.getProfileImage());
        boolean hasProfileImg = false;
        // 프로필 이미지 확인
        if(user != null && user.getProfileImage()!=null) {
            hasProfileImg = userService.checkNFT(NFTList, user.getProfileImage());
            System.out.println("hasProfileImg : " + hasProfileImg);
        }

        long cnt = userService.countUser();
        if(user == null){
            User newUser = new User();
            String newNickname = userService.newNickname();
            newUser.setNickname(newNickname);
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


    @ApiOperation(value = "사용자 정보 가져오기", notes = "닉네임으로 사용자 정보 받아오는 API입니다.")
    @GetMapping("/{userId}")
    public ResponseEntity<Map<String, Object>> getUserInfo(@PathVariable Long userId) {
        Map<String, Object> result = new HashMap<>();
        User user = userService.getUserWalletAddress(userId);
        List<LikeUser> follower = likeRepository.findAllByToUser(user);
        List<LikeUser> following = likeRepository.findAllByFromUser(user);

        if(user != null) {
            User userDto = userService.getUserInfo(user.getWalletAddress());
            if (userDto != null) {
                result.put("message", SUCCESS);
                result.put("data", userDto);
                result.put("follower_cnt", follower.size());
                result.put("following_cnt", following.size());
            } else {
                result.put("message", FAIL);
            }
        }
        else{
            result.put("message", FAIL);
        }



        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ApiOperation(value = "닉네임 확인", notes = "닉네임 중복, 길이, 욕설, 공백 검사")
    @PostMapping ("/modify")
    public ResponseEntity<Map<String, Object>> checkNickname(@RequestBody Map<String, String> nicknameReq){
        Map<String, Object> result = new HashMap<>();

        String nickname = nicknameReq.get("nickname");

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

    @ApiOperation(value = "회원정보 수정", notes = "닉네임, 프로필 이미지, 공개여부 수정")
    @PutMapping("{userId}")
    public ResponseEntity<Map<String, Object>> updateUser(@PathVariable long userId, @RequestBody UserUpdateReq reqData){
        Map<String, Object> result = new HashMap<>();

        String nickname = reqData.getNickname();
        String profileImage = reqData.getProfileImage();
        boolean profilePublic = reqData.isProfilePublic();

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

    @ApiOperation(value = "게임 점수 입력", notes = "회원 Id와 게임 점수 입력")
    @PutMapping("/score")
    public ResponseEntity<Map<String, Object>> updateGameScore(@RequestBody GameScoreReq reqData){
        Map<String, Object> result = new HashMap<>();
        System.out.println(reqData.getUserId());
        long userId = reqData.getUserId();
        long gameScore = reqData.getGameScore();
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
