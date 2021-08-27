import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Success from './components/Success';

function MyRoute() {
  return (
    <div>
      <Route path="/" exact component={App} />
      <Route path="/success" component={Success} />
    </div>
  );
}

export default MyRoute;
