import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = { hidden: true, kilometers: '' }
  }

  showResults(kilometers, transportation) {
    this.setState({
      hidden: false,
      kilometers: kilometers
    }, () => {
      var y = 0;

      var scroll = () => {
        y += 20;
        window.scrollTo(0, y); 
        
        if (y < document.body.scrollHeight) {
          setTimeout(scroll, 5); 
        }
      };

      scroll();
    });
  }

  render() {
    return (
      <div className={"Result" + (this.state.hidden ? ' hide' : '')} ref={(el) => { this.mainElement = el; }}>
        <div className="details">
          <p>
            You have travelled {this.state.kilometers} km.
          </p>
        </div>
      </div>
    )
  }
}

export default Result;
