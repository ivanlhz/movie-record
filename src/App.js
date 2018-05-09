import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Search, MovieDetails, NotFound } from './components';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="movies/:id" component={MovieDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
