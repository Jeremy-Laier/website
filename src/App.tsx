import React from 'react';
import './App.css';
import nyan from './200.gif';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <img src={nyan} alt="BigCo Inc. logo"/>
who was right
      </header>
    </div>
  );
}

export default App;
