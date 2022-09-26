package com.ssafy.purgae.request;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GameScoreReq {
    private long userId;
    private long gameScore;
}
