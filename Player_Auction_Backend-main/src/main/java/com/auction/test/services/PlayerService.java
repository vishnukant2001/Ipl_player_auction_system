package com.auction.test.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.auction.test.entities.Player;
import com.auction.test.repository.PlayerRepository;



@Service
public class PlayerService {


	private PlayerRepository playerRepository;
	

	public PlayerService(PlayerRepository playerRepository) {
		super();
		this.playerRepository = playerRepository;
	}
	
	public List<Player> getAllPlayers(){
		return playerRepository.findAll();
	}
	
	public void addPlayer(Player player) {
		Player existingPlayer=playerRepository.findByName(player.getName());
		if(existingPlayer!=null) {
			System.out.println("Name already exists");
		}
		else {

			playerRepository.save(player);
		}
	}
	
	public void deletePlayer(Long id) {
		playerRepository.deleteById(id);
	}
	
	public void updatePlayer(Player player) {
		playerRepository.save(player);
	}
	
	public Player getPlayerById(Long id) {
		return playerRepository.findById(id).get();
	}
	
	public Player getPlayerByName(String name) {
		return playerRepository.findByName(name);
	}

	
	public void deletePlaylistById(Long id) {
		playerRepository.deleteById(id);	
	}
	
}
