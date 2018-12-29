package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/")
	public Demo[] home() {
		Demo[] demos = { new Demo("Hello Docker Spring-Boot World!!!!!"), new Demo("Hello Hello!!!!!")};
		return demos;
	}

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
}
