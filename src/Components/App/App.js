import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Nav from '../Nav/Nav'
import EventSearch from '../EventSearch/EventSearch';
import SavedEvents from '../SavedEvents/SavedEvents';

const App = ()=> {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <main>
                <Nav />
              </main>
            )
          }}
        />
        <Route
          exact
          path="/search"
          render={() => {
            return (
              <main>
                <Nav />
                <EventSearch />
              </main>
            )
          }}
        />
        <Route
          exact
          path="/saved-events"
          render={() => {
            return (
              <main>
                <SavedEvents />
              </main>
            )
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
