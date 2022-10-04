package com.ssafy.purgae.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserReq {
    @ApiModelProperty(example = "지갑 주소")
    private String walletAddress;
    @ApiModelProperty(example = "NFT 목록")
    private String[] nft;
}
