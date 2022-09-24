package com.ssafy.purgae.controller;

import com.ssafy.purgae.database.entity.UserMapping;
import com.ssafy.purgae.database.entity.rankingUser;
import com.ssafy.purgae.service.RankingService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Api(tags = {"랭킹 API Controller"})
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/ranking")
public class RankingController {
    private static final String SUCCESS = "SUCCESS";
    private static final String FAIL = "FAIL";

    @Autowired
    RankingService rankingService;

    @ApiOperation(value = "게임 랭킹", notes = "요청시 탑10 게임 랭킹 조회")
    @GetMapping("/game")
    public ResponseEntity<Map<String, Object>> gameRanking(){
        Map<String, Object> result = new HashMap<>();
        List<UserMapping> top10 = rankingService.getTop10GameScore();

        if(top10 != null){
            result.put("top10", top10);
            result.put("message", SUCCESS);
        }else{
            result.put("message", FAIL);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/like")
    public ResponseEntity<Map<String, Object>> likeRanking(){
        Map<String, Object> result = new HashMap<>();
        List<rankingUser> top10 = rankingService.getTop10Like();

        if(top10 != null){
            result.put("top10", top10);
            result.put("message", SUCCESS);
        }else{
            result.put("message", FAIL);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
