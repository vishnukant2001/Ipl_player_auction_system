package com.auction.test.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.auction.test.entities.Auction;
import com.auction.test.entities.Bid;
import com.auction.test.entities.Player;
import com.auction.test.entities.Team;
import com.auction.test.services.PlayerService;
import com.auction.test.services.TeamService;

@RestController
public class AuctionController {
	
	@Autowired
	private PlayerService playerService;
	
	@Autowired
	private TeamService teamService;
	
	@Autowired
	Auction auc;
	
//	@MessageMapping("/nextplayer")  
//	@SendTo("/topic/auction")	 
//	public Auction getNextPlayer(@RequestBody Auction auction) {
//		Player player=playerService.getPlayerById((long) 1);
//		auction.setPlayer(player);
//		return auction;
//	}
	
//	@MessageMapping("/bid")  
//	@SendTo("/topic/auction")	 
//	public String bid(@Payload BidMessage bidMessage) throws Exception{
//		System.out.println("Recieved bid msg");
//		return "everything is working properly";
//		
//	}
	
	@MessageMapping("/bid")  
	@SendTo("/topic/auction")	 
	public String bid(@RequestBody Bid currentbid){
		Bid newbid=currentbid;
		newbid.setBidprice(currentbid.getBidprice()+0.2);
		System.out.println(newbid);
		auc.setBid(newbid);
		return auc.getBidString()+",\"type\":\"bid\"}";
		
	}
	
	@MessageMapping("/start")  
	@SendTo("/topic/auction")	 
	public String startAuction(){
		System.out.println("recieved request for starting the auction from admin");
		auc.setStarted(true);
		Player firstPlayer=playerService.getPlayerById((long)1);
		return firstPlayer.getString()+",\"type\":\"start\"}";
	}
	
	@MessageMapping("/timerstop")
	@SendTo("/topic/auction")
	public String timerStop(@RequestBody Bid finalbid) {
		System.out.println(finalbid);
		Player soldPlayer=playerService.getPlayerById(finalbid.getPlayerId());
		Team bidTeam=teamService.getTeamById(finalbid.getTeamId());
		soldPlayer.setPrice(finalbid.getBidprice());
		soldPlayer.setTeam(bidTeam);
		double currentPurse=bidTeam.getPurse();
		bidTeam.setPurse(currentPurse-finalbid.getBidprice());
		
		playerService.updatePlayer(soldPlayer);
		teamService.updateTeam(bidTeam);
		return "player sold to the team";
	}
}
