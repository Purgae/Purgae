package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.User;


public interface UserService {
    public String newNickname();

    public String makeNickname();

    public User getUserWalletAddress(Long userId);

    public User getUserInfo(String walletAddress);

    public User getUserInfoById(Long userId);

    public boolean checkNFT(String[] NFTList, String profileHash);

    public int updateProfileImg(long userId, String profileHash);

    public boolean checkDuplicate(String inputNickname);

    public boolean checkSlang(String inputNickname);

    public boolean checkLength(String inputNickname);

    public boolean checkBlank(String inputNickname);

    public User saveUser(User user);

    public long countUser();
    public User updateUserInfo(long userId, String profileImage, String nickname, boolean profilePublic);

    public User updateGameScore(Long userId, Long gameScore);



}
