import React from 'react';
import './App.scss';

import SavedPages from "./components/SavedPages"
import ChampList from './components/ChampList';
import RiotAPI from "./components/RiotAPI"
import NavBar from "./components/NavBar"
import Popup from "./components/Popup"

function openMenu() {
  let nav = document.querySelector("nav")
  nav.classList.toggle("sticky")
}


function App() {

  return (
    <div>
      <NavBar />
      <Popup />
      <div className="App">
        <nav >
            <h1>League of Legends: Rune Tracker</h1>
            <p>Keep track of all your favourite champions rune page setups, without having to worry about where to find them.</p>
            <p>Select your champion and configure the rune page to your liking - don't forget to name it!</p>
            <p>Save the rune page and it will be avilable from your list of saved rune pages when you need it.</p>
            <h2>Patch 10.14</h2>
          <div className="show-app-left" onClick={openMenu}>
            <div id="arrow">></div>
          </div>
          
        </nav>
        <div className="app-left">
          <h1>League of Legends: Rune Tracker</h1>
          <p>Keep track of all your favourite champions rune page setups, without having to worry about where to find them.</p>
          <p>Select your champion and configure the rune page to your liking - don't forget to name it!</p>
          <p>Save the rune page and it will be avilable from your list of saved rune pages when you need it.</p>
          <h2>Patch 10.14</h2>
        </div>
        <div className="app-centre">
          <RiotAPI />
          <ChampList />
        </div> 
        <div className="app-right">
          <SavedPages />
        </div> 
      </div>      
    </div>

  );
}

export default App;
