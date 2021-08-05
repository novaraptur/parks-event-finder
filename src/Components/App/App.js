import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Nav from '../Nav/Nav'
import EventSearch from '../EventSearch/EventSearch';
import SavedEvents from '../SavedEvents/SavedEvents';
import SavedParks from '../SavedParks/SavedParks';

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
                <Nav />
                <SavedEvents />
              </main>
            )
          }}
        />
        <Route
          exact
          path="/saved-parks"
          render={() => {
            return (
              <main>
                <Nav />
                <SavedParks />
              </main>
            )
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
