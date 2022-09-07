package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

public interface UserService {

    public User getUserWalletAddress(String nickname);

    public User getUserInfo(String walletAddress);

    public boolean checkNFT(List<Map<String,String>> NFTList, String profileHash);

    public int updateProfileImg(long userId, String profileHash);

    public boolean checkDuplicate(String inputNickname);

    public boolean checkSlang(String inputNickname);

    public boolean checkLength(String inputNickname);

    public boolean checkBlank(String inputNickname);

    public User saveUser(User user);

//    public UserDto getUserInfo(Long userId);
    public long countUser();
    public User updateUserInfo(long userId, String profileImage, String nickname, boolean profilePublic);

    public User updateGameScore(Long userId, Long gameScore);



}
