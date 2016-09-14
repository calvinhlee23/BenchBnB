import React from 'react';

class BenchIndexItem extends React.Component {
  render () {
    return (<li>{JSON.stringify(this.props.bench)}</li>);
  }
}

export default BenchIndexItem;
