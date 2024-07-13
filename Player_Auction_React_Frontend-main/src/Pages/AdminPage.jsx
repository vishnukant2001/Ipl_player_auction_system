import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../Styles/login.css"
import { AuctionContext } from '../Context/AuctionContext';
import { useContext } from 'react';
import { useEffect } from 'react';


const AdminPage = () => {
  const navigate = useNavigate();

  const { auction, setAuction } = useContext(AuctionContext);

  useEffect(() => {
    console.log(auction); 
  }, [auction]); 

  const navigateDashboard = () => {
    setAuction({...auction,started:true});
    navigate("/dashboard/admin")
  }

  const navigateHome = () => {
    setAuction({...auction,started:false,over:true});
    navigate("/")
  }

  return (
    <div>
      <button onClick={navigateDashboard} className='btn'>
        Start Auction
      </button>
      <button onClick={navigateHome} className='btn'>
        End Auction
      </button>
    </div>
  )
}

export default AdminPage