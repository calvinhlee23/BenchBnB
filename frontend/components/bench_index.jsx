import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {

  constructor(props) {
    super(props);
    window.props = props;
  }

  componentDidMount() {
    this.props.requestBenches();
  }

  render() {
    return(
      <ul id = "bench-index">
      {this.props.benches.map((bench, indx) => {
        return <BenchIndexItem key = {indx} bench = {bench}/>;
      })}
      </ul>
    );
  }
}

export default BenchIndex;
