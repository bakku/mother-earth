import React, { Component } from 'react';
import RouteInput from './RouteInput';
import Result from './Result';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <RouteInput />
          <Result />
        </div>
      </div>
    );
  }
}

export default App;
