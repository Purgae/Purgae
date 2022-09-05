package com.ssafy.purgae.service;

import com.ssafy.purgae.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Service("userService")
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService {

    @Override
    public String getUserWalletAddress(String nickname) {
        return null;
    }

    @Override
    public UserDto getUserInfo(String walletAddress) {
        return null;
    }

    @Override
    public Boolean checkNFT(List<String> NFTList) {
        return null;
    }

    @Override
    public Boolean checkNickname(String inputNickname) {
        return null;
    }

    @Override
    public Boolean saveUser(UserDto userDto) {
        return null;
    }

//    @Override
//    public UserDto getUserInfo(Long userId) {
//        return null;
//    }

    @Override
    public Boolean updateUserInfo(UserDto userDto) {
        return null;
    }

    @Override
    public Boolean updateGameScore(Long userId, Long gameScore) {
        return null;
    }
}
