import React, { Component } from 'react';
import logo from './earth-hands.svg';
import './Headline.css';

class Headline extends Component {
  render() {
    return (
      <div className="Headline">
        <img src={logo} className="logo"/>
        <div className="title">
          <h1 className="title-mother">MOTHER</h1>
          <h1 className="title-earth">EARTH</h1>
        </div>
      </div>
    )
  }
}

export default Headline;
