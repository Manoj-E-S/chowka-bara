package com.chowkabara.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class RootController {

	@GetMapping("/")
	public String index() {
		return "Hello from the Chowka Bara Server!";
	}

}