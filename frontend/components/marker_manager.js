class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches) {
    var mkTR = this._markersToRemove();
    if (mkTR) {
      mkTR.forEach((marker) =>  {
        marker.setMap(null);
      });
    }

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
    } else {
      benches.forEach((bench) => {
        for (var i = 0; i < this.markers.length; i++) {
          if (this.markers[i].id === bench.id) {
            break;
          }
        }
        arr.push(bench);
      });
    }
    return arr;
  }

  _createMarkerFromBench (bench) {
      var position = {lat: bench.lat, lng: bench.lng};
      var marker = new google.maps.Marker({
        position: position,
        id: bench.id
      });
      marker.setMap(this.map);
      this.markers.push(marker);
  }

  _markersToRemove () {
    var result = [];
    var benches = document.getElementsByClassName('bench');
    if (benches[benches.length-1]) {
      var presentBnIDs= Array.from(benches).map((b) => {
            return JSON.parse(b.innerHTML).id;
          });
    }
    if (presentBnIDs) {
      this.markers.forEach((mk) => {
        if (presentBnIDs.indexOf(mk.id) === undefined) {
          result.push(mk);
        }
      });
    }
    return result;
  }

}


export default MarkerManager;
