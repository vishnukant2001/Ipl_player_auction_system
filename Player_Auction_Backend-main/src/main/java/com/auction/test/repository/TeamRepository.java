package com.auction.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.auction.test.entities.Team;

public interface TeamRepository extends JpaRepository<Team,Long>{
	Team findByUsername(String username);
}
