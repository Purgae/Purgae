package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.User;
import com.ssafy.purgae.database.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.Map;

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
    public boolean checkNFT(List<Map<String,String>> NFTList, String profileHash) {
        for(int i=0; i<NFTList.size();i++){
            if(profileHash.equals(NFTList.get(i).get("hash"))){
                return true;
            }
        }
        return false;
    }

    public int updateProfileImg(long userId, String profileHash){

        return userRepository.updateProfileImage(userId,profileHash);
    }

    @Override
    public boolean checkDuplicate(String inputNickname) {
        User hasNickname = userRepository.findFirstByNickname(inputNickname);
        if(hasNickname == null){
            return false;
        }
        return true;
    }

    @Override
    public boolean checkSlang(String inputNickname) {
        if(inputNickname.contains("병신")) return true;
        return false;
    }

    @Override
    public boolean checkLength(String inputNickname) {
        if(inputNickname.length()>=2 && inputNickname.length()<17){
            return true;
        }
        return false;
    }

    @Override
    public boolean checkBlank(String inputNickname) {
        if(inputNickname.contains(" ")) return true;
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


//    @Override
//    public UserDto getUserInfo(Long userId) {
//        return null;
//    }
    public long countUser() {
        return userRepository.count();
    }


    @Override
    public User updateUserInfo(long userId, String nickname, String profileImage, boolean profilePublc) {
        User user = userRepository.findFirstById(userId);
        user.setNickname(nickname);
        user.setProfileImage(profileImage);
        user.setProfilePublic(profilePublc);
        try{
            userRepository.save(user);
            return user;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public User updateGameScore(Long userId, Long gameScore) {
        User user = userRepository.findFirstById(userId);
        user.setGameScore(gameScore);
        try{
            userRepository.save(user);
            return user;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
