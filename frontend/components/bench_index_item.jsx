import React from 'react';

class BenchIndexItem extends React.Component {
  render () {
    return (<li className = "bench" key = {this.props.bench.id}>{JSON.stringify(this.props.bench)}</li>);
  }
}

export default BenchIndexItem;
