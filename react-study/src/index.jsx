import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import MyRoute from './MyRoute';

ReactDOM.render(
  <BrowserRouter>
    <MyRoute />
  </BrowserRouter>,
  document.getElementById('root')
);
