package com.chowkabara.api.socket;

import com.corundumstudio.socketio.SocketIOServer;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SocketIOService {

	private final SocketIOServer socketIOServer;

	@Autowired
	public SocketIOService(SocketIOServer socketIOServer) {
		this.socketIOServer = socketIOServer;
	}

	@PostConstruct
	public void startSocketIOServer() {
		this.socketIOServer.startAsync();
		System.out.println("SocketIO server started...");
	}

	@PreDestroy
	public void stopSocketIOServer() {
		if (this.socketIOServer != null) {
			this.socketIOServer.stop();
			System.out.println("SocketIO server stopped.");
		}
	}

}
