import React, { Component } from 'react';
import RouteInput from './RouteInput';
import Result from './Result';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.showResultsHandler = this.showResultsHandler.bind(this);
  }

  showResultsHandler(kilometers, transportation) {
    this.result.showResults(kilometers, transportation);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <RouteInput showResultsHandler={this.showResultsHandler}/>
          <Result ref={(child) => { this.result = child; }}/>
        </div>
      </div>
    );
  }
}

export default App;
