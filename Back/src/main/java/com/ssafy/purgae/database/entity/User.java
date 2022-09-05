package com.ssafy.purgae.database.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Table(name = "User")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User extends BaseEntity{

    @Column(name = "walletAddress", length = 50, nullable = false)
    String walletAddress;

    @Column(name = "nickname", length = 16, nullable = false)
    String nickname;

    @Column(name = "profileImage", length = 50)
    String profileImage;

    @Column(name = "gameScore")
    @ColumnDefault("0")
    Long gameScore;

    @Column(name = "profilePublic", nullable = false)
    @ColumnDefault("0")
    Boolean profilePublic;

}
