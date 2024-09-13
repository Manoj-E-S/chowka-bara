package com.chowkabara.api.socket;

import com.corundumstudio.socketio.SocketIOServer;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
@Log4j2
public class SocketIOConfiguration {

	@Value("${socket.host}")
	private String SOCKETHOST;

	@Value("${socket.port}")
	private int SOCKETPORT;

	@Bean
	public SocketIOServer socketIOServer() {
		var config = new com.corundumstudio.socketio.Configuration();
		config.setHostname(this.SOCKETHOST);
		config.setPort(this.SOCKETPORT);

		System.out.println(this.SOCKETHOST + ":" +  this.SOCKETPORT );

		return  new SocketIOServer(config);
	}

}

