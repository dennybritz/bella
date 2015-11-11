import React from 'react';
import { Navbar } from './navbar.jsx';
import { Footer } from './footer.jsx';

export class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  }

  render() {
    return (
      <div className="bella-app">
        <Navbar/>
        <div className="container">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}
