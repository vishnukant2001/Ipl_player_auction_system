package com.auction.test.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.auction.test.entities.Team;
import com.auction.test.services.TeamService;


@RestController
@RequestMapping("/api")
public class TeamController {
	
	@Autowired
	private TeamService teamService;
	
	@PostMapping("/teamRegister")
    public String submitData(@RequestBody Team team) {
        teamService.addTeam(team);
        return "Team Registerd Successfully";
    }
	
	@GetMapping("/login")
    public ResponseEntity<Team> authenticateTeam(@RequestParam String username, @RequestParam String password) {
        // Query the database to check if the user exists and credentials are valid
        Team team = teamService.getTeamByUsername(username);

        if (team == null || !team.getPassword().equals(password)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(team);
        } else {
            return ResponseEntity.ok(team);
        }
    }
}
