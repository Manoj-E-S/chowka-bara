package com.chowkabara.api.socket;


import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.annotation.OnConnect;
import com.corundumstudio.socketio.annotation.OnDisconnect;
import org.springframework.stereotype.Component;

@Component
public class SocketIOController {

	@OnConnect
	public void onPlayerConnect(SocketIOClient client) {
		System.out.println("New user connected with socket " + client.getSessionId().toString());
	}

	@OnDisconnect
	public void onPlayerDisconnect(SocketIOClient client) {
		System.out.println("User disconnected " + client.getSessionId().toString());
	}

}
