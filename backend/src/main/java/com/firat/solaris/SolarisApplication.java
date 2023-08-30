package com.firat.solaris;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class SolarisApplication {

	public static void main(String[] args) {
		SpringApplication.run(SolarisApplication.class, args);
	}

}
