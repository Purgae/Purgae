package com.ssafy.purgae.service;

import com.ssafy.purgae.database.entity.User;
import com.ssafy.purgae.database.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.awt.print.Pageable;
import java.util.List;

@Service("rankingService")
@RequiredArgsConstructor
@Transactional
public class RankingServiceImpl implements RankingService{
    @Autowired
    UserRepository userRepository;
    @Override
    public List<User> getTop10GameScore() {
        List<User> gameTop10 = userRepository.findTop10ByOrderByGameScoreDesc();
        return gameTop10;
    }
}
