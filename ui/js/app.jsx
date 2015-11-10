import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { App } from './components/app.jsx';
import { Home } from './components/home.jsx';

let history = createBrowserHistory();
if (window.location.protocol === 'file:') {
  history = createHashHistory({ queryKey: false });
}

const routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute name="home" component={Home}/>
      <Route path="*" component={Home}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('main'));
