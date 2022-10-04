package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.User;
import com.ssafy.purgae.database.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.sql.Array;
import java.util.*;

@Service("userService")
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public String newNickname() {
        String nick = makeNickname();

        while(checkDuplicate(nick)){
            nick = makeNickname();
        }

        return nick;
    }

    @Override
    public String makeNickname() {
        List<String> color = Arrays.asList("빨간색 ", "주황색 ", "노란색 ", "초록색 ", "파란색 ", "남색 ", "보라색 ", "갈색 ", "검정색 "
                                , "귤색 ", "금색 ", "군청색 ", "다홍색 ", "담청색 ", "라임색 ", "바다색 ", "밤색 ", "분홍색 ", "살구색 "
                                , "산호색 ", "연두색 ", "옥색 ", "은색 ", "자주색 ", "자홍색 ", "카키색 ", "하늘색 ", "하양색 ");
        List<String> fish = Arrays.asList("가물치", "가사리", "가오리", "가자미", "갈치", "개복치", "검복", "고도리", "고등어", "광어"
                                , "금붕어", "날치", "노가리", "노래미", "다랑어", "대구", "도다리", "도미", "돌고래", "메기", "멸치", "명태"
                                , "물고기", "민어", "방어", "뱀장어", "북어", "붕어", "상어", "숭어", "쏘가리", "아귀", "연어", "은어"
                                , "장어", "전어", "조기", "쥐치", "참치", "청어", "피라냐", "해마", "홍어");
        Collections.shuffle(color);
        Collections.shuffle(fish);

        return color.get(0) + fish.get(0);
    }

    @Override
    public User getUserWalletAddress(Long userId) {
        return userRepository.findFirstById(userId);
    }


    @Override
    public User getUserInfo(String walletAddress) {
        return userRepository.findFirstByWalletAddress(walletAddress);
    }

    @Override
    public User getUserInfoById(Long userId) {
        return userRepository.findFirstById(userId);
    }


    @Override
    public boolean checkNFT(List<Map<String,String>> NFTList, String profileHash) {
        for(int i=0; i<NFTList.size();i++){
            System.out.println("hash : " + NFTList.get(i).get("hash"));
            System.out.println("NFTList get i : " + NFTList.get(i));
            if(profileHash.equals(NFTList.get(i).get("hash"))){
                System.out.println("checkNFT func : " + NFTList.get(i).get("hash"));
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
        List<String> badword = Arrays.asList("병신", "시발", "바보", "개새끼", "ㅅ1발", "ㅂㅅ", "ㅅㅂ", "죽어");
        for(int i = 0; i<badword.size(); i++){
            if(inputNickname.contains(badword.get(i))) return true;
        }
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
        if(inputNickname.contains("  ")) return true;
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
