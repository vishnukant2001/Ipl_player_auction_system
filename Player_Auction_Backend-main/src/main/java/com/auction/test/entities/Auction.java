package com.auction.test.entities;

import java.beans.JavaBean;

import org.springframework.context.annotation.Configuration;

@Configuration
@JavaBean
public class Auction {
	private boolean started;
    private boolean over;
    private Bid bid;
    private Player player;
    
	public Auction() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Auction(boolean started, boolean over, Bid bid, Player player) {
		super();
		this.started = started;
		this.over = over;
		this.bid = bid;
		this.player = player;
	}
	
	public boolean isStarted() {
		return started;
	}
	
	public void setStarted(boolean started) {
		this.started = started;
	}
	
	public boolean isOver() {
		return over;
	}
	
	public void setOver(boolean over) {
		this.over = over;
	}
	
	public Bid getBid() {
		return bid;
	}
	
	public void setBid(Bid bid) {
		this.bid = bid;
	}
	
	public Player getPlayer() {
		return player;
	}
	
	public void setPlayer(Player player) {
		this.player = player;
	}
    
	@Override
	public String toString() {
		return "Auction [started=" + started + ", over=" + over + ", bid=" + bid + ", player=" + player + "]";
	}

	public String getBidString() {
		return bid.getString();
	}
    
}
