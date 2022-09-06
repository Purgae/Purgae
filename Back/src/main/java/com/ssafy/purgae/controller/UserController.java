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

        String walletAddress = (String) reqData.get("walletAddress");
        System.out.println(walletAddress);
        User user = userService.getUserInfo(walletAddress);
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
            result.put("data", user);
            result.put("message", SUCCESS);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
