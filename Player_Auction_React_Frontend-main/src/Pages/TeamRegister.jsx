import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../Styles/login.css"
import { TeamContext } from '../Context/TeamContext';
import axios from 'axios';


const TeamRegister = () => {
  const navigate = useNavigate();

  const { team, setTeam } = useContext(TeamContext);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/teamRegister', team);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    navigate(`/team/login`)
  };

  const changeHandler = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });

  };


  return (
    <div className="wrapper">
      <div>Team</div>
      <div className="login-container">
        <center>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-heading">Register</div>
            <label>Team Name</label>
            <input
              type="text"
              name="name"
              onChange={changeHandler}
            />
            <br />
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
            <input type="submit" name="TeamRegister" value="Register" />
          </form>

        </center>
        <div className="login-opt">
          <span>Already Registered? </span>
          <Link to="/team/login" style={{ color: "white" }}>Login</Link>
        </div>

      </div>
    </div>
  )
}

export default TeamRegister