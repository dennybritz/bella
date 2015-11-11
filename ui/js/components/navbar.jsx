import React from 'react';

export class Navbar extends React.Component {
  render() {
    return (
      <nav className="bella-navbar navbar navbar-default">
        <div className="container">
          <NavbarHeader/>
          <NavbarMenuRight/>
        </div>
      </nav>
    );
  }
}

class NavbarHeader extends React.Component {
  render() {
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bella-navbar-collapse" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
        </button>
        <a className="navbar-brand" href="#">bella</a>
      </div>
    );
  }
}


class NavbarMenuRight extends React.Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="bella-navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Label</a></li>
          <li><a href="#">Evaluate</a></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projects <span className="caret"/></a>
            <ul className="dropdown-menu">
              <li><a href="#">Project 1</a></li>
              <li><a href="#">Project 2</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Create Project</a></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
