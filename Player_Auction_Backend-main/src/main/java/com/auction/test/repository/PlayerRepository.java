package com.auction.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.auction.test.entities.Player;

public interface PlayerRepository extends JpaRepository<Player,Long>{

	Player findByName(String name);

}
