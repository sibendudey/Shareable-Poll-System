package com.sibendu.votingsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@EnableAutoConfiguration
@ComponentScan(basePackages = "com.sibendu.votingsystem")
public class VotingSystemApplication {
	public static void main(String[] args) {
		SpringApplication.run(VotingSystemApplication.class, args);
	}
}
