import React, { Component } from 'react';
import Ninjas from './Ninjas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
        <p>Welcome!</p>
        <Ninjas name="Kiko" age="25" belt="black"/>
        <Ninjas name="Bashira" age="30" belt="brown"/>
      </header>
    </div>
  );
}

export default App;
 