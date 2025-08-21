package com.clarityvisionsolutions.distributor.mgmt.actions;

import com.liferay.client.extension.util.spring.boot.ClientExtensionUtilSpringBootComponentScan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@Import(ClientExtensionUtilSpringBootComponentScan.class)
@SpringBootApplication
public class ClaritySpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClaritySpringBootApplication.class, args);
	}

}