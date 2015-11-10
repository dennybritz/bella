import React from 'react';

export class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  }

  render() {
    return (
      <div className="bella-app">
        {this.props.children}
      </div>
    );
  }
}
