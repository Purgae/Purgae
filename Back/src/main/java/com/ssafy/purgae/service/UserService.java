package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.User;
import com.ssafy.purgae.dto.UserDto;
import com.sun.org.apache.xpath.internal.operations.Bool;

import java.util.List;

public interface UserService {

    public String getUserWalletAddress(String nickname);

    public UserDto getUserInfo(String walletAddress);

    public Boolean checkNFT(List<String> NFTList);

    public Boolean checkNickname(String inputNickname);

    public Boolean saveUser(UserDto userDto);

//    public UserDto getUserInfo(Long userId);

    public Boolean updateUserInfo(UserDto userDto);

    public Boolean updateGameScore(Long userId, Long gameScore);

}
