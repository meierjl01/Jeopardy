import React from 'react';
import ReactDom from 'react-dom';
import Board from './components/board';

import { Router, Route, hashHistory } from 'react-router';

const router = (
      <Router history={hashHistory}>
          <Route path="/" component={Board}/>
      </Router>
);

export default router;
