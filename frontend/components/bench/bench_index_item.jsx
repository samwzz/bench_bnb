import React from 'react';
import { withRouter } from 'react-router';

class BenchIndexItem {
  constructor(props) {
    super(props);
  }

  render() {
    const { description } = this.props.bench;
    return (
      <div>
        <li>{description}</li>
      </div>
    );
  }
}
