package com.auction.test.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.auction.test.entities.Player;
import com.auction.test.entities.Team;
import com.auction.test.repository.TeamRepository;

@Service
public class TeamService {
	private TeamRepository teamRepository;
	

	public TeamService(TeamRepository teamRepository) {
		super();
		this.teamRepository = teamRepository;
	}
	
	public List<Team> getAllTeams(){
		return teamRepository.findAll();
	}
	
	public void addTeam(Team team) {
		Team existingTeam=teamRepository.findByUsername(team.getUsername());
		if(existingTeam!=null) {
			System.out.println("Team already exists");
		}
		else {

			teamRepository.save(team);
		}
	}
	
	public void deleteTeam(Long id) {
		teamRepository.deleteById(id);
	}
	
	public void updateTeam(Team team) {
		teamRepository.save(team);
	}
	
	public Team getTeamByUsername(String username) {
		return teamRepository.findByUsername(username);
	}
	
	public Team getTeamById(Long teamId) {
		if(teamId==null)
			return null;
		return teamRepository.findById(teamId).get();
	}

}
