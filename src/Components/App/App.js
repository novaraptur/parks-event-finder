import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Nav from '../Nav/Nav'
import EventSearch from '../EventSearch/EventSearch';

const App = ()=> {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Nav />
            )
          }}
        />
        <Route
          exact
          path="/search"
          render={() => {
            return (
              <EventSearch />
            )
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
