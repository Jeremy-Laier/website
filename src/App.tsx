import React from 'react';
import './App.css';
import nyan from './200.gif';
import shrek from './shrek.gif';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <img src={nyan} alt="Dog gif"/>
      <img src={shrek} alt="Shrek Movie"/>
who was right
      </header>
    </div>
  );
}

export default App;
