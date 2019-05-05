import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Kiko', age: 30, belt: 'black', id: 1 },
      { name: 'Bashira', age: 25, belt: 'brown', id: 2 },
      { name: 'Aya', age: 35, belt: 'green', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
          <h1>Welcome to Very First React App</h1>
          <Ninjas ninjas={this.state.ninjas} />
          <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;