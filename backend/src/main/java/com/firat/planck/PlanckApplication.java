package com.firat.planck;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class PlanckApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlanckApplication.class, args);
	}

}
