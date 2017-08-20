import React, { Component } from 'react';
import RouteInput from './RouteInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <RouteInput />
        </div>
      </div>
    );
  }
}

export default App;
