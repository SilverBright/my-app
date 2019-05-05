import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Kiko', age: 30, belt: 'black', id: 1 },
      { name: 'Bashira', age: 25, belt: 'brown', id: 2 },
      { name: 'Aya', age: 35, belt: 'green', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
          <h1>Welcome to My React App</h1>
          <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
 