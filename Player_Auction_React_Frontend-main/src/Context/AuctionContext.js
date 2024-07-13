import { createContext } from "react";
import { useState } from "react";


export const AuctionContext = createContext();


const AuctionProvider = ({ children }) => {
    const initialAuctionState = {
        started: false,
        over: false,
        bid: {
            teamId: null,
            playerId: null,
            teamname: null,
            bidprice: 0.0,
        },
        player: {
            id: null,
            name: "",
            baseprice: null,
            imgurl: null,
            price:null,
            teamId:null
        }

    }

    const [auction, setAuction] = useState(initialAuctionState);

    return (
        <AuctionContext.Provider value={{ auction, setAuction }}>
            {children}
        </AuctionContext.Provider>
    );
};

export default AuctionProvider;