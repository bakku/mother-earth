import React, { Component } from 'react';
import './RouteForm.css';
import 'font-awesome/css/font-awesome.css';

class RouteForm extends Component {
  constructor(props) {
    super(props);
    this.handleKilometerChange = this.handleKilometerChange.bind(this);
    this.setActiveTransportation = this.setActiveTransportation.bind(this);
    this.state = { kilometers: '', transportation: '' };
  }

  handleKilometerChange(e) {
    this.setState({
      kilometers: e.target.value
    });
  }

  setActiveTransportation(transportation) {
    this.setState({
      transportation: transportation
    });
  }

  render() {
    return (
      <div className="RouteForm">
        <p>
          How far was the distance of your last big trip?
        </p>
        <div>
          <input type="text" onChange={this.handleKilometerChange} placeholder="Distance in kilometers.." className="input-kilometer" />
          km
        </div>
        <div className="button-group">
          <div className={"button" + (this.state.transportation === 'bus' ? ' active' : '')} onClick={() => this.setActiveTransportation('bus')}>
            <i className="fa fa-bus fa-2x"></i>
          </div>
          <div className={"button" + (this.state.transportation === 'car' ? ' active' : '')} onClick={() => this.setActiveTransportation('car')}>
            <i className="fa fa-car fa-2x"></i>
          </div>
          <div className={"button" + (this.state.transportation === 'train' ? ' active' : '')} onClick={() => this.setActiveTransportation('train')}>
            <i className="fa fa-train fa-2x"></i>
          </div>
          <div className={"button" + (this.state.transportation === 'plane' ? ' active' : '')} onClick={() => this.setActiveTransportation('plane')}>
            <i className="fa fa-plane fa-2x"></i>
          </div>
        </div>

        <div className="clearfix submit-button-wrapper">
          <div className="submit-button">
            Show my results
          </div>
        </div>
      </div>
    )
  }
}

export default RouteForm;
