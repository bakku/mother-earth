import React, { Component } from 'react';
import './RouteInput.css'
import Headline from './Headline';
import RouteForm from './RouteForm';

class RouteInput extends Component {
  render() {
    return (
      <div className="RouteInput">
        <Headline /> 
        <RouteForm showResultsHandler={this.props.showResultsHandler} />
      </div>
    )
  }
}

export default RouteInput;
