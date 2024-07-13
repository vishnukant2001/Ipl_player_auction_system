import React from 'react'
import "../Styles/login.css"
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TeamContext } from '../Context/TeamContext';
import { useContext } from 'react';
import { PlayerContext } from '../Context/PlayerContext';

const PlayerRegister = () => {
  const navigate = useNavigate();



  const { player, setPlayer } = useContext(PlayerContext);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/player', player);
      console.log(player);
      setPlayer(response.data)
    } catch (error) {
      console.error(error);
    }

    if (player.id) {
      navigate(`/dashboard/player/${player.name}`)
    }
  };

  const changeHandler = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });

  };


  return (
    <div className="wrapper">
      <div className="user">Player</div>
      <div className="login-container">
        <center>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-heading">Register</div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={changeHandler}
            />
            <br />
            <label>BasePrice</label>
            <input
              type='number'
              name="baseprice"
              step="0.1"
              onChange={changeHandler}
            />
            <br />
            <label>ImageUrl</label>
            <input
              type='text'
              name="imgurl"
              onChange={changeHandler}
            />
            <br />
            <input type="submit" name="PlayerRegister" value="Register" />
          </form>
        </center>
      </div>
    </div>
  )
}

export default PlayerRegister