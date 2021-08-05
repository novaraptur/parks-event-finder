import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Nav from '../Nav/Nav'
import EventSearch from '../EventSearch/EventSearch';
import SavedEvents from '../SavedEvents/SavedEvents';
import SavedParks from '../SavedParks/SavedParks';
import EventDetailPage from '../EventDetailPage/EventDetailPage';
import ParkDetailPage from '../ParkDetailPage/ParkDetailPage';

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
          path="/search/:event_id"
          render={({ match }) => {
            <EventDetailPage id={parseInt(match.params.event_id)} />
          }}
        />
        <Route
          exact
          path="/search/:park_id"
          render={({ match }) => {
            <ParkDetailPage id={parseInt(match.params.park_id)} />
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
          path="/saved-events/:event_id"
          render={({ match }) => {
            <EventDetailPage id={parseInt(match.params.event_id)} />
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
        <Route
          exact
          path="/saved-parks/:park_id"
          render={({ match }) => {
            <ParkDetailPage id={parseInt(match.params.park_id)} />
          }}
        />
        <Route
          render={() => {
            return (
              <Redirect to="/" />
            )
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
