package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


public interface RankingService {
    public List<User> getTop10GameScore();
}
