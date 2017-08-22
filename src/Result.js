import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  constructor(props) {
    super(props);

    this.planeGramsPerPerson = 380.0;
    this.carGramsPerPerson = 150.0;
    this.trainGramsPerPerson = 40.0;
    this.busGramsPerPerson = 20.0;
    this.lightBulbPerDay = 12.0 * 7.0;
    this.emissionsPerPersonUganda = 0.1 * 1000 * 1000;
    this.globalPopulation =  7526827043;
    this.maximumEmissionsTonsPerYear = 750000000000 / 50.0;

    this.state = { hidden: true, kilometers: '', transportation: '', emission: 0, animate: false }
  }

  titleize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  showResults(kilometers, transportation) {
    var emission = 0.0

    switch(transportation) {
      case 'bus':
        emission = this.busGramsPerPerson * parseInt(kilometers);
        break;
      case 'car':
        emission = this.carGramsPerPerson * parseInt(kilometers);
        break;
      case 'train':
        emission = this.trainGramsPerPerson * parseInt(kilometers);
        break;
      case 'plane':
        emission = this.planeGramsPerPerson * parseInt(kilometers);
        break;
    }

    this.setState({
      hidden: false,
      kilometers: kilometers,
      transportation: transportation,
      emission: emission
    }, () => {
      var y = 0;

      var scroll = () => {
        y += 20;
        window.scrollTo(0, y); 
        
        if (y < document.body.scrollHeight) {
          setTimeout(scroll, 5); 
        } else {
					this.setState({ animate: true });
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
            You have travelled {this.state.kilometers} km by {this.titleize(this.state.transportation)}. <i className={"fa fa-" + this.state.transportation}></i>
          </p>
          <p>
            This equals to {this.state.emission} g/CO2. <i className="fa fa-bolt"></i>
          </p>
          <p>
            {Math.ceil(this.state.emission / this.lightBulbPerDay)} light bulbs could be switched on for one day instead. <i className="fa fa-lightbulb-o"></i>
          </p>
          <p>
            If a person in Uganda would do the same {Math.ceil(this.emissionsPerPersonUganda / this.state.emission)} time(s), he would have used his whole annual carbon footprint. <i className="fa fa-industry"></i>
          </p>
          <p>
            If everyone on earth would do this {Math.ceil(this.maximumEmissionsTonsPerYear / ((this.state.emission / 1000.0 / 1000.0) * this.globalPopulation))} time(s) per year, global warming will reach its 2°C temperature rise by 2050 using travel emissions alone. <i className="fa fa-thermometer-full"></i>
          </p>
          <p>
            Only 30 % of our carbon footprint is caused by travelling. <i className="fa fa-suitcase"></i>
          </p>
          
          <div className="center ending-slogan">
            <p className={this.state.animate ? 'load' : ''}>
              Travel less. For our planet.
            </p>
          </div>
        </div>

        <div className="footer">
          <a href="https://github.com/bakku/mother-earth" className="left">
            <i className="fa fa-github"></i> Github 
          </a>

          <a href="https://github.com/bakku/mother-earth/blob/master/README.md" className="right">
            <i className="fa fa-info"></i> Sources/Credits
          </a>
        </div>
      </div>
    )
  }
}

export default Result;
