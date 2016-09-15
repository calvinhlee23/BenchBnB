import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

class Search extends React.Component {

  componentDidMount() {
    this.props.requestBenches();
  }

  render() {
    return (
      <div>
        <BenchMap benches = {this.props.benches}
          updateBounds = {this.props.updateBounds}/>

        <BenchIndex benches = {this.props.benches}/>
      </div>
    );
  }
}

export default Search;
