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
                  requestBenches = {this.props.requestBenches}/>

        <BenchIndex benches = {this.props.benches}
                    requestBenches = {this.props.requestBenches}/>
      </div>
    );
  }
}

export default Search;
