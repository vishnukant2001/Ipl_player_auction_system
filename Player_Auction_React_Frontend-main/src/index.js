import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import AuctionProvider from "./Context/AuctionContext";
import TeamProvider from './Context/TeamContext';
import PlayerProvider from './Context/PlayerContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TeamProvider>
    <AuctionProvider>
      <PlayerProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      </PlayerProvider>
    </AuctionProvider>
  </TeamProvider>
);

