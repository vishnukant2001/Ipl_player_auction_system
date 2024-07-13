import React, { forwardRef, useImperativeHandle } from "react";
import SockJsClient from "react-stomp";
import { AuctionContext } from "../Context/AuctionContext";
import { TeamContext } from "../Context/TeamContext";
import { useContext } from "react";


const Connector = forwardRef((props, ref) => {
    let clientRef = null;
    const { auction, setAuction } = useContext(AuctionContext);
    const { team, setTeam } = useContext(TeamContext);

    const handleMsg = (msg) => {
        console.log(msg);
        const { type } = msg;
        if (type === "bid") {
            const {teamId,playerId,teamname,bidprice}=msg;
            const newbid = {
                teamId: teamId,
                playerId: playerId,
                teamname: teamname,
                bidprice: bidprice
            }

            setAuction({ ...auction, bid: newbid });
            console.log(auction);
        }

        else if (type === "start") {
            const { id, name, baseprice, imgurl, price } = msg;
            const firstPlayer = {
                id: id,
                name: name,
                baseprice: baseprice,
                imgurl: imgurl,
                price: price,
                teamId: null
            }
            console.log("Starting the Auction")
            setAuction({ ...auction, started: true, player: firstPlayer });
        }

    };

    useImperativeHandle(ref, () => ({

        sendBidMessage() {
            console.log(team);
            const msg = JSON.stringify({
                teamId: team.teamId,
                playerId: auction.player.id,
                teamname: team.name,
                bidprice: auction.bid.bidprice
            });
            clientRef.sendMessage("/app/bid", msg);
        },

        sendStartMessage() {
            const msg = "start auction";
            clientRef.sendMessage("/app/start", msg);
        },

        sendTimeOutMessage() {
            const msg = JSON.stringify({
                teamId: auction.bid.teamId,
                playerId: auction.player.id,
                teamname: auction.bid.teamname,
                bidprice: auction.bid.bidprice
            }); 
            clientRef.sendMessage("/app/timerstop", msg);
        },
    }));


    return (
        <div>
            <SockJsClient
                url="http://localhost:8080/server"
                topics={["/topic/auction"]}
                onConnect={() => {
                    console.log("connected ");
                }}

                onMessage={(msg) => {
                    handleMsg(msg);
                }}

                ref={(client) => {
                    clientRef = client;
                }}
            />
        </div>
    );
});

export default Connector;