import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Links from './components/Links';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Links />
      <Switch>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
