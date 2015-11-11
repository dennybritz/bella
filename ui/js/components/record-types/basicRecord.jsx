import React from 'react';

export class BasicRecord extends React.Component {

  static propTypes = {
    id: React.PropTypes.any.isRequired,
    labels: React.PropTypes.array,
    tags: React.PropTypes.array,
    children: React.PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className="bella-record bella-basic-record">
        {this.props.children}
        <div className="bella-record-labels">
        </div>
        <div className="bella-record-tags">
        </div>
      </div>
    );
  }
}
