import React from 'react';
import MarkerManager from './marker_manager';

class BenchMap extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.mapIdleUpdate();
    this.MarkerManager.updateMarkers(this.props.benches);

  }
  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  mapIdleUpdate() {
    this.map.addListener('idle', () => {
      var latlngbounds = this.map.getBounds();
      const bounds = {NorthEast: {
        lat: latlngbounds.getNorthEast().lat(),
        lng: latlngbounds.getNorthEast().lng()},
        SouthWest: {
          lat: latlngbounds.getSouthWest().lat(),
          lng: latlngbounds.getSouthWest().lng()}
        };
        this.props.updateBounds(bounds);
      });
    }

  render() {
    return (
      <div id = "bench-map" ref = "map"></div>
    );
  }
}

export default BenchMap;
