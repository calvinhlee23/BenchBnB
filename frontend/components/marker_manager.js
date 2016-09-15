class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches) {
    if (benches.length > 0 ) {
      this._benchesToAdd(benches).forEach((bench) => {
        this._createMarkerFromBench(bench);
      });
    }
  }

  _benchesToAdd(benches) {
    var arr = [];
    if (this.markers.length ===0) {
      return benches;
    }
    benches.forEach((bench) => {
      if (bench.id > this.markers[this.markers.length-1].id) {
        arr.push(bench);
      }
    });
    return arr;
  }

  _createMarkerFromBench (bench) {
    console.log(bench);
      var position = {lat: bench.lat, lng: bench.lng};
      var marker = new google.maps.Marker({
        position: position,
        id: bench.id
      });
      marker.setMap(this.map);
      this.markers.push(marker);
  }

}


export default MarkerManager;
