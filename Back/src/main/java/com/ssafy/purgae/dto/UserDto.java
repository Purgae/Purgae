package com.ssafy.purgae.dto;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {
    private Long userId;
    private String walletAddress;
    private String nickname;
    private String profileImage;
    private Long gameScore;
    private Boolean profilePublic;
}
