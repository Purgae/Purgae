package com.ssafy.purgae.database.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

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

    @Column(name = "NFTId")
    private Long NFTId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId")
    private User ownerId;
}
