package com.auction.test.entities;

public class Bid {
	private Long teamId;
	private Long playerId;
	private String teamname;
	private double bidprice;
	
	public Bid() {
		super();
	}
	

	public Bid(Long teamId, Long playerId, String teamname, double bidprice) {
		super();
		this.teamId = teamId;
		this.playerId = playerId;
		this.teamname = teamname;
		this.bidprice = bidprice;
	}
	
	public Long getTeamId() {
		return teamId;
	}
	public void setTeamId(Long teamId) {
		this.teamId = teamId;
	}
	public Long getPlayerId() {
		return playerId;
	}
	public void setPlayerId(Long playerId) {
		this.playerId = playerId;
	}
	public String getTeamname() {
		return teamname;
	}
	public void setTeamname(String teamname) {
		this.teamname = teamname;
	}
	public double getBidprice() {
		return bidprice;
	}
	public void setBidprice(double bidprice) {
		this.bidprice = bidprice;
	}
	
	@Override
	public String toString() {
		return "Bid [teamId=" + teamId + ", playerId=" + playerId + ", teamname=" + teamname + ", bidprice=" + bidprice
				+ "]";
	}
	
	public String getString() {
		return "{\"teamId\":\""+teamId+"\",\"teamname\":\""+teamname+"\",\"playerId\":\""+playerId+"\",\"bidprice\":\""+bidprice+"\"";
	}
	
}
