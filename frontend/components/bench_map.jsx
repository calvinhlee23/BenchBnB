import React from 'react';
import MarkerManager from './marker_manager';

class BenchMap extends React.Component {
  constructor (props) {
    super(props);
    console.log(props.benches);
  }

  componentDidMount () {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return (
      <div id = "bench-map" ref = "map"></div>
    );
  }
}

export default BenchMap;
