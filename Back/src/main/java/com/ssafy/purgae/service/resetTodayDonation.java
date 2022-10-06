package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.User;
import com.ssafy.purgae.database.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class resetTodayDonation {

    @Autowired
    UserRepository userRepository;

    // 매일 정각마다 2일 전 등록된 NFTId 중 소유자가 지정되지 않은 내역 삭제
    @Scheduled(cron = "0 0 15 * * *")
    public void deleteNFTId(){
        List<User> list = userRepository.findAll();

        for(int i = 0; i<list.size(); i++){
            list.get(i).setTodayDonation(0);
            userRepository.save(list.get(i));
        }

        System.out.println("user today donation clear");
    }
}
