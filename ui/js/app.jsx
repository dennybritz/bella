import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import createBrowserHistory from 'history/lib/createBrowserHistory';

let history = createBrowserHistory();
if (window.location.protocol === 'file:') {
  history = createHashHistory({ queryKey: false });
}


ReactDOM.render(<span>Hi</span>, document.getElementById('main'));

