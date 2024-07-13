import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/login.css"
import axios from 'axios';

import { TeamContext } from '../Context/TeamContext';
import { useContext } from 'react';

const LoginForm = ({ name }) => {
  const navigate = useNavigate();

  const {team,setTeam}=useContext(TeamContext);

  const initLoginData = {
    username: "",
    password: ""
  }

  const [loginData, setLoginData] = useState(initLoginData);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name == "admin") {
      if (loginData.username == "Ajith" && loginData.password == "Ashokde0314") {
        // navigate(`/admin/page`);
        navigate(`/dashboard/admin/${loginData.username}`);
      }
    }

    else {
      try {
        const response = await axios.get('http://localhost:8080/api/login', {
          params: { username: loginData.username, password: loginData.password }
        });

        if (response.status === 200) {
          console.log('Authentication successful');

          await setTeam(response.data);
          console.log(team);

          if(team.teamId){
            navigate(`/dashboard/team/${team.name}`);
          }
        } else {
          console.error('Authentication failed:', response.data);
        }
      } catch (error) {
        console.error('Error:', error);
      }

    };

  }

  const changeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };


  return (
    <div className="wrapper">
      <div>{name}</div>
      <div className="login-container">
        <center>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-heading">Login</div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={changeHandler}
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={changeHandler}
            />
            <br />
            <input type="submit" name="submit" />
          </form>
        </center>
      </div>
    </div>
  )
}

export default LoginForm