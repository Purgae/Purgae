package com.ssafy.purgae;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class PurgaeApplication {

    public static void main(String[] args) {
        SpringApplication.run(PurgaeApplication.class, args);
    }

}
