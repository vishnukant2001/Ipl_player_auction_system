package com.auction.test.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Team {


	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long teamId;

    private String name;
    private String username;
    private String password;
    private double purse=50.0;

    @OneToMany(mappedBy = "team")
    private List<Player> players;

    
	public Team() {
		super();
	}


	public Team(Long teamId, String name, String loginId, String password, double purse, List<Player> players) {
		super();
		this.teamId = teamId;
		this.name = name;
		this.username = loginId;
		this.password = password;
		this.purse = purse;
		this.players = players;
	}


	public Long getTeamId() {
		return teamId;
	}


	public void setTeamId(Long teamId) {
		this.teamId = teamId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public double getPurse() {
		return purse;
	}


	public void setPurse(double purse) {
		this.purse = purse;
	}


	public List<Player> getPlayers() {
		return players;
	}


	public void setPlayers(List<Player> players) {
		this.players = players;
	}

    // Getters and setters
	@Override
	public String toString() {
		return "Team [teamId=" + teamId + ", name=" + name + ", username=" + username + ", password=" + password
				+ ", purse=" + purse + "]";
	}

    
}







