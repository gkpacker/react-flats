import React, { Component } from 'react';

import flats from '../data/flats';
import FlatList from './flat_list';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

const GOOGLE_MAPS_API_KEY = 'AIzaSyAwDH8_UHravaNwWVqFe1XYN9U1awtkVkQ';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0]
    };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }

  center = () => {
    const { lat, lng } = this.state.selectedFlat;

    return({ lat, lng });
  }

  render() {
    const { selectedFlat } = this.state;
    const { lat, lng } = selectedFlat;

    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} selectFlat={this.selectFlat} selectedFlat={selectedFlat} />
        </div>
        <div className="map-container">
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
              defaultCenter={this.center()}
              defaultZoom={12}
              yesIWantToUseGoogleMapApiInternals
            >
              <Marker lat={lat} lng={lng} />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
