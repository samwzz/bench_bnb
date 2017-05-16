import React from 'react';
import { withRouter } from 'react-router';

class BenchIndexItem extends React.Component {
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

export default BenchIndexItem;
