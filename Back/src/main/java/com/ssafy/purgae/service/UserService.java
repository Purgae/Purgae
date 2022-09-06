package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.User;

import java.util.List;

public interface UserService {

    public User getUserWalletAddress(String nickname);

    public User getUserInfo(String walletAddress);

    public boolean checkNFT(List<String> NFTList);

    public boolean checkNickname(String inputNickname);

    public User saveUser(User user);

    public long countUser();

//    public UserDto getUserInfo(Long userId);

    public boolean updateUserInfo(User user);

    public boolean updateGameScore(Long userId, Long gameScore);

}
