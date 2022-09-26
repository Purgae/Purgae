package com.ssafy.purgae.database.entity;

import lombok.*;

import javax.persistence.*;

@Table(name = "NFT")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NFTInfo {
    @Id
    @GeneratedValue
    @Column(name = "infoId")
    private Long infoId;

    @Column(name = "userId")
    private Long userId;

    @Column(name = "NFTId")
    private Long NFTId;
}
