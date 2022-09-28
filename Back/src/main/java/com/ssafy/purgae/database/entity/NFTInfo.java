package com.ssafy.purgae.database.entity;

import lombok.*;
import net.bytebuddy.asm.Advice;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

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

    @Column(name = "createdAt")
    private LocalDate createdAt;
}
