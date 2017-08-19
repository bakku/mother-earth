import React, { Component } from 'react';
import './Navbar.css';
import logo from './earth-hands.svg';

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="container">
          <div className="brand-logo">
            <img src={logo} className="brand-img"/>
          </div>
          <div className="brand-title">
            MOTHER EARTH
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
