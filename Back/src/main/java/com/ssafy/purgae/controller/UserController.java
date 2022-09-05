package com.ssafy.purgae.controller;


import com.ssafy.purgae.dto.UserDto;
import com.ssafy.purgae.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {

    private static final String SUCCESS = "SUCCESS";
    private static final String FAIL = "FAIL";

    @Autowired
    UserService userService;

    @GetMapping("{nickname}")
    public ResponseEntity<Map<String, Object>> getUserInfo(@PathVariable String nickname){
        Map<String, Object> result = new HashMap<>();

        String walletAddress = userService.getUserWalletAddress(nickname);
        UserDto user = userService.getUserInfo(walletAddress);

        if(user != null){
            result.put("message", SUCCESS);
            result.put("data",user);
        }
    }

}
