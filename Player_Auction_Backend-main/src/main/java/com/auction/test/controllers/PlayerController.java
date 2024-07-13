package com.auction.test.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auction.test.entities.Player;
import com.auction.test.services.PlayerService;


@RestController
@RequestMapping("/api")
public class PlayerController {
	
	@Autowired
	private PlayerService playerService;
	
	@PostMapping("/player")
    public Player submitData(@RequestBody Player player) {
        playerService.addPlayer(player);
        Player addedPlayer=playerService.getPlayerByName(player.getName());
        return addedPlayer;
    }
}
