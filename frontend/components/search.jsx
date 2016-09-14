import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

class Search extends React.Component {
  render() {
    return (
      <div>
        <BenchMap/>
        <BenchIndex
        requestBenches = {this.props.requestBenches}
        benches = {this.props.benches}/>
      </div>
    );
  }
}

export default Search;
