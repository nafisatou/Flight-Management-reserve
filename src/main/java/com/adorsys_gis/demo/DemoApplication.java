package com.adorsys_gis.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {
    "com.adorsys_gis.demo",
    "com.example.flightreservation"
})
@EnableJpaRepositories(basePackages = "com.example.flightreservation.repository")
@EntityScan(basePackages = "com.example.flightreservation.entity")
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

}
