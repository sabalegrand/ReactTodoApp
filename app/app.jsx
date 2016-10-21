import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';

$(document).foundation();

require('style!css!sass!./styles/app.scss');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={TodoApp} >

    </Route>
  </Router>,
  document.getElementById('app')
);
