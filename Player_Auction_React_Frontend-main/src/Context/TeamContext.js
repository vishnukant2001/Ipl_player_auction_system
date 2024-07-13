import { createContext } from "react";
import { useState } from "react";

export const TeamContext = createContext();


const initialTeamState={
    teamId:null,
    name:"",
    username:null,
    password:null,
    purse:50,
    players:[],

}

const TeamProvider = (props) => {

    const [team, setTeam] = useState(initialTeamState);

    
    return (
      <TeamContext.Provider value={{ team, setTeam }}>
        {props.children}
      </TeamContext.Provider>
    );
  };

  export default TeamProvider;