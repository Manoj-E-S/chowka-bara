package com.chowkabara.api.checkServer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class CheckServerController {

	@GetMapping("/")
	public String index() {
		return "Hello from the Chowka Bara Server!";
	}

}
