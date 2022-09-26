package com.ssafy.purgae.controller;

import com.ssafy.purgae.database.entity.NFTInfo;
import com.ssafy.purgae.request.NFTReq;
import com.ssafy.purgae.service.NFTService;
import com.ssafy.purgae.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @ApiOperation(value = "기부 횟수 가져오기", notes = "현재까지 기부한 횟수를 가져오는 API입니다.")
    @GetMapping("/{userId}")
    public ResponseEntity<Map<String,Object>> getNFTNum(@PathVariable Long userId){
        Map<String, Object> result = new HashMap<>();
        List<NFTInfo> userNFTList = nftService.getUserNFT(userId);

        if(userNFTList.size() >= 0){
            result.put("message", SUCCESS);
            result.put("NFTNum", userNFTList.size());
            return new ResponseEntity<>(result, HttpStatus.OK);
        }else{
            result.put("message", FAIL);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }
    

    @ApiOperation(value = "NFT 랜덤 id 가져오기", notes = "중복되지 않은 NFT id 출력하는 API입니다.")
    @GetMapping("/randomnft/{userId}")
    public ResponseEntity<Map<String,Object>> insertNFTInfo(@PathVariable Long userId){
        Map<String, Object> result = new HashMap<>();
        List<NFTInfo> NFTList = nftService.getNFT();
        List<NFTInfo> userNFTList = nftService.getUserNFT(userId);
        int NFTNum = userNFTList.size()%10;
        long randomNum = 0;
        boolean flag= true;
        if(NFTNum == 9) {
            int cnt =0;
            label : while(flag) {
                cnt++;
                if(cnt>1000000){
                    result.put("message", FAIL);
                    return new ResponseEntity<>(result, HttpStatus.OK);
                }
                randomNum = (int) (Math.random() * 99) + 1;
                for(int i=0;i<NFTList.size();i++){
                    if(NFTList.get(i).getNFTId() == randomNum){
                        continue label;
                    }
                }
                flag = false;
            }
        }else{
            label : while(flag) {
                randomNum = (int)(Math.random()*899) + 101;
                for(int i=0;i<NFTList.size();i++){
                    if(NFTList.get(i).getNFTId() == randomNum){
                        continue label;
                    }
                }
                flag = false;
            }
        }
        NFTInfo newNFT = new NFTInfo();
        newNFT.setUserId(userId);
        newNFT.setNFTId(randomNum);
        nftService.saveNFTInfo(newNFT);
        result.put("message", SUCCESS);
        result.put("NFTId", randomNum);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }


}
