import React from 'react';
import './App.css';
import logo from './logo.svg';
import Squats from './components/squats'
import Laps from './components/laps'
import Clock from './components/clock'
import Pushups from './components/pushups'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome To The Fitness Tracker! Your Physical Accountability Is Just a Click Away.
        </p>
      </header>
      <div className="App-body">
        <Pushups />
        <Squats />
        <Laps />
        <Clock />
      </div>

      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>T'mara Morrow 2021</p>
      </footer>
    </div>
  );
}

export default App;