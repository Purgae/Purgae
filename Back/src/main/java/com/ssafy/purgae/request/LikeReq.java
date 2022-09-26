package com.ssafy.purgae.request;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LikeReq {
    private long toUser;
    private long fromUser;
}
