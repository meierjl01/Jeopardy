import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import categories from './collections/categories';

import category from './models/category';

import Gamepage from './components/gamepage';
import QuestionBox from './components/questionbox';



const router = (
      <Router history={hashHistory}>
          <Route path="/" component={Gamepage}>
            <Route path="/questions/:categoryId/:clueId" component={QuestionBox}/>
          </Route>
      </Router>
);

export default router;
