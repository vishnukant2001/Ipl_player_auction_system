import React from 'react'
import { useParams } from 'react-router-dom'
import "../Styles/auction.css"
import { useEffect } from 'react'
import { useState } from 'react'

import { useContext } from 'react'
import { AuctionContext } from '../Context/AuctionContext';
import { TeamContext } from '../Context/TeamContext';
import { PlayerContext } from '../Context/PlayerContext';

import { useRef } from 'react'
import Connector from '../WebSocket/Connector'

const DashboardPage = () => {

  const { auction, setAuction } = useContext(AuctionContext);
  const { player, setPlayer } = useContext(PlayerContext);
  const { team, setTeam } = useContext(TeamContext);
  const { user, name } = useParams();

  const intervalref = useRef();
  const [timer, setTimer] = useState(-1);
  const [timerStopSent, setTimerStopSent] = useState(false);

  const childRef = useRef();

  useEffect(() => {
    intervalref.current = setInterval(() => {
      if (timer > 0) setTimer((prevSeconds) => prevSeconds - 1);
      else {
        if (!timerStopSent && auction.started) {
          childRef.current.sendTimeOutMessage();
          console.log("sent");
          setTimerStopSent(() => true);
        }
      }
    }, 1000);

    return () => {
      clearInterval(intervalref.current);
    };
  }, [timer, timerStopSent]);

  useEffect(() => {
    setTimer(30);
    setTimerStopSent(() => false);
  }, [auction]);

  const handleStartClick = () => {
    console.log(auction);
    childRef.current.sendStartMessage(); // Send the "Start Auction" message

  };

  const handleBidClick = () => {
    console.log(auction);
    childRef.current.sendBidMessage();

  };


  return (
    <div>
      <div className="team-name">{name}</div>
      {(auction.started || user==="admin") ? (

        <div className="auction-container">
          <Connector ref={childRef} />
          {user === "admin" &&

            <button
              className="button"
              // disabled={auction.started}
              onClick={handleStartClick}

            >
              Start Auction
            </button>}


          <div className="timer">Timer: {timer}s</div>
          <div className="player-container">
            <div className="player-info">
              <div className="player-info-item">
                <div className="player-label center-text">Player details</div>
              </div>
              <hr />
              <div className="player-info-item">
                <div className="player-label">Id:</div>
                <div className="player-value">{auction.player.id}</div>
              </div>
              <div className="player-info-item">
                <div className="player-label">Name:</div>
                <div className="player-value">{auction.player.name}</div>
              </div>
              <div className="player-info-item">
                <div className="player-label">Base Price:</div>
                <div className="player-value">{auction.player.baseprice}</div>
              </div>
            </div>
            <div className="player-img-container">
              <img
                src={auction.player.imgurl}
                className="player-img"
                alt="Player"
              />
            </div>
            <div className="current-bid-info">
              <div className="current-bid-info-item">
                <div className="current-bid-label center-text">Current Bid</div>
                {/* <div className="current-bid-value">{auction.player.name}</div> */}
              </div>
              <hr />
              <div className="current-bid-info-item">
                <div className="current-bid-label">Bidding Team:</div>
                <div className="current-bid-value">
                  {auction.bid.teamname}
                </div>
              </div>
              <div className="current-bid-info-item">
                <div className="current-bid-label">Bid Amount:</div>
                <div className="current-bid-value">
                  {auction.bid.bidprice}
                </div>
              </div>
            </div>
          </div>
          <button
            className="button"
            disabled={user != "team"}
            onClick={handleBidClick}
          >
            Bid
          </button>
        </div>

      ) : (
        <div >
          <Connector ref={childRef}/>
          <p className="welcome-msg" style={{ textAlign: 'center', margin: '0', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 'bolder', fontSize: "40px", color: 'white' }}>Wait for admin to start auction...</p>
        </div>)}
    </div>
  )
}

export default DashboardPage

