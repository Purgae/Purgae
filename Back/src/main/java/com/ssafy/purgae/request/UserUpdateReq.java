package com.ssafy.purgae.request;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserUpdateReq {
    private String nickname;
    private String profileImage;
    private boolean profilePublic;

}
