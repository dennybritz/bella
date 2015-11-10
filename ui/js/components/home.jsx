import React from 'react';

export class Home extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  }

  render() {
    return (
      <div className="bella-home">
        <p>Hello World.</p>
      </div>
    );
  }
}
