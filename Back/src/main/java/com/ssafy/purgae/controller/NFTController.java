package com.ssafy.purgae.controller;

import com.ssafy.purgae.database.entity.NFTInfo;
import com.ssafy.purgae.database.entity.User;
import com.ssafy.purgae.database.repository.NFTRepository;
import com.ssafy.purgae.service.NFTService;
import com.ssafy.purgae.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Api(tags = {"NFT Controller"})
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/nft")
public class NFTController {

    private static final String SUCCESS = "SUCCESS";
    private static final String FAIL = "FAIL";

    @Autowired
    NFTService nftService;
    @Autowired
    NFTRepository nftRepository;

    @Autowired
    UserService userService;


    @ApiOperation(value = "NFT 랜덤 id 가져오기", notes = "중복되지 않은 NFT id 출력하는 API입니다.")
    @PostMapping("/randomNft/{userId}")
    public ResponseEntity<Map<String, Object>> insertNFTInfo(@PathVariable Long userId) {
        Map<String, Object> result = new HashMap<>();
        User user = userService.getUserInfoById(userId);
        if(user.getTodayDonation() >= 125){
            result.put("message", FAIL);
            result.put("error", "over");
            return new ResponseEntity<>(result, HttpStatus.OK);
        }

        user.setTodayDonation(user.getTodayDonation() + 1);
        userService.saveUser(user);

        long randomNum = 0;
        boolean flag = true;
        int cnt = 0;

        List<NFTInfo> NFTList = nftService.getNFT();

        while (flag) {
            cnt++;
            if (cnt > 1000000) {
                result.put("message", FAIL);
                result.put("error", "timeout");
                return new ResponseEntity<>(result, HttpStatus.OK);
            }
            randomNum = (int) (Math.random() * 9999) + 1;
            if(NFTList.contains(randomNum)){
                continue;
            }
            flag = false;
        }

        NFTInfo newNFT = new NFTInfo();
        newNFT.setNFTId(randomNum);
        newNFT.setOwnerId(user);
        nftService.saveNFTInfo(newNFT);
        result.put("message", SUCCESS);
        result.put("NFTId", randomNum);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }


    @ApiOperation(value = "기부 후 발급 받은 NFT 정보 저장", notes = "회원이 발급받은 NFT 정보 DB에 저장")
    @PutMapping("/{userId}/{nftId}")
    public ResponseEntity<Map<String, Object>> updateNFTInfo(@PathVariable Long userId, @PathVariable Long nftId){
        Map<String, Object> result = new HashMap<>();
        if(nftRepository.findFirstByNFTId(nftId) != null) {
            boolean delete = nftService.deleteNFTInfo(nftId);
        }else{
            result.put("message", FAIL);
            return new ResponseEntity<>(result,HttpStatus.OK);
        }

        User user = userService.getUserInfoById(userId);

        if(user != null){
            user.setTodayDonation(user.getTodayDonation() - 1);
            userService.saveUser(user);
            result.put("message",SUCCESS);
        }else{
            result.put("message", FAIL);
        }
        return new ResponseEntity<>(result,HttpStatus.OK);
    }


}
