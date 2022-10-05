//package com.ssafy.purgae.service;
//
//import com.ssafy.purgae.database.entity.NFTInfo;
//import com.ssafy.purgae.database.repository.NFTRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.scheduling.annotation.Scheduled;
//import org.springframework.stereotype.Component;
//
//import java.time.LocalDate;
//import java.time.LocalDateTime;
//import java.time.format.DateTimeFormatter;
//import java.util.List;
//
//@Component
//public class deleteNFTId {
//
//    @Autowired
//    NFTRepository nftRepository;
//
//    @Autowired
//    NFTService nftService;
//
//    // 매일 정각마다 2일 전 등록된 NFTId 중 소유자가 지정되지 않은 내역 삭제
//    @Scheduled(cron = "0 0 0 * * *")
//    public void deleteNFTId(){
//        List<NFTInfo> list = nftRepository.findByUserIdAndCreatedAt(-1, LocalDate.now().minusDays(2));
//        long size = list.size();
//        for(int i = 0; i<size; i++){
//            nftService.deleteNFTInfo(list.get(i).getNFTId());
//        }
//
//        System.out.println("2일 전 등록된 NFTId 중 소유자가 지정되지 않은 내역을 삭제하였습니다.");
//    }
//}
