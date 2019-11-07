import React from 'react';
import logo from './IMG950065.jpg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      	<p>Emilio sucks <\p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
