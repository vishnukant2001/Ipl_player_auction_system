import { createContext } from "react";
import { useState } from "react";


export const PlayerContext = createContext();


const PlayerProvider = ({ children }) => {
    const initialPlayerState={
        id:null,
        name:"",
        baseprice:null,
        imgurl:null,
        price:null,
        teamId:null

    }

    const [player, setPlayer] = useState(initialPlayerState);
  
    return (
      <PlayerContext.Provider value={{ player, setPlayer }}>
        {children}
      </PlayerContext.Provider>
    );
  };

  export default PlayerProvider;