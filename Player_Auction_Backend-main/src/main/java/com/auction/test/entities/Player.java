package com.auction.test.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double baseprice;
    private String imgurl="https://www.shutterstock.com/image-vector/cricket-batsman-playing-action-illustration-2136241905";
    private double price;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;
    
    public Player() {
		super();
	}

	public Player(Long id, String name, double basePrice, String imageUrl, double curPrice, Team team) {
		super();
		this.id = id;
		this.name = name;
		this.baseprice = basePrice;
		this.imgurl = imageUrl;
		this.price = curPrice;
		this.team = team;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getBaseprice() {
		return baseprice;
	}

	public void setBaseprice(double basePrice) {
		this.baseprice = basePrice;
	}

	public String getImgurl() {
		return imgurl;
	}

	public void setImgurl(String imageUrl) {
		this.imgurl = imageUrl;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double curPrice) {
		this.price = curPrice;
	}

	public Team getTeam() {
		return team;
	}

	public void setTeam(Team team) {
		this.team = team;
	}

	@Override
	public String toString() {
		return "Player [id=" + id + ", name=" + name + ", basePrice=" + baseprice + ", imageUrl=" + imgurl
				+ ", curPrice=" + price + ", team=" + team + "]";
	}

	

	public String getString() {
//		return "{\"type\":\"bid\",\"started\":"+true+"}";
		return "{\"id\":\""+id+"\",\"name\":\""+name+"\",\"baseprice\":\""+baseprice+"\",\"imgurl\":\""+imgurl+"\"";
		
	}

    // Getters and setters
	
	
    
    
}
