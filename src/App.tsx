import React from 'react';
import './App.css';
import nyan from './nyan.gif';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <img src={nyan} alt="BigCo Inc. logo"/>
      </header>
    </div>
  );
}

export default App;
