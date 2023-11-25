// BrowseFlights.js

import React, { Component } from 'react';
import FlightList from './FlightList';

class BrowseFlights extends Component {
  render() {
    return (
      <div>
        <h1>Browse Flights</h1>
        <FlightList />
      </div>
    );
  }
}

export default BrowseFlights;
