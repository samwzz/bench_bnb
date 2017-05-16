import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render () {
    return (
      <div>
        <h1>Benches: </h1>
        { this.props.benches.map(bench => (
          <BenchIndexItem bench={bench} key={bench.id} />
        ))}
      </div>
    );
  }
}

export default BenchIndex;
