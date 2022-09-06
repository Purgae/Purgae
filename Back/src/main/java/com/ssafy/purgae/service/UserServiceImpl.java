package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.User;
import com.ssafy.purgae.database.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Service("userService")
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User getUserWalletAddress(String nickname) {
        return userRepository.findFirstByNickname(nickname);
    }

    @Override
    public User getUserInfo(String walletAddress) {
        return userRepository.findFirstByWalletAddress(walletAddress);
    }

    @Override
    public boolean checkNFT(List<String> NFTList) {
        return false;
    }

    @Override
    public boolean checkNickname(String inputNickname) {
        return false;
    }

    @Override
    public User saveUser(User user) {
        try{
            userRepository.save(user);
            return user;
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }

    }

    @Override
    public long countUser() {
        return userRepository.count();
    }

//    @Override
//    public UserDto getUserInfo(Long userId) {
//        return null;
//    }

    @Override
    public boolean updateUserInfo(User user) {
        return false;
    }

    @Override
    public boolean updateGameScore(Long userId, Long gameScore) {
        return false;
    }
}
