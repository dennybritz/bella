import React from 'react';

export class Record extends React.Component {

  static propTypes = {
    children: React.PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className="bella-record">
        {this.props.children}
      </div>
    );
  }
}
