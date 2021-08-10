import React, {useEffect, useState, useCallback} from 'react';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';

import Nav from '../Nav/Nav'
import EventSearch from '../EventSearch/EventSearch';
import SavedEvents from '../SavedEvents/SavedEvents';
import SavedParks from '../SavedParks/SavedParks';
import EventDetailPage from '../EventDetailPage/EventDetailPage';
import ParkDetailPage from '../ParkDetailPage/ParkDetailPage';

const dotenv = require('dotenv').config();

const App = () => {
  const [savedParks, setSavedPark] = useState([]);
  const [savedEvents, setSavedEvent] = useState([]);
  const [stateCode, setStateCode] = useState('');

  const updateStateCode = (event) => {
    event.preventDefault();
    setStateCode(event.target.value);
  }

  const saveEvent = (eventInfo) => {
    savedEvents.push(eventInfo);
  }

  const savePark = (parkInfo) => {
    savedParks.push(parkInfo);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/event/:event_id"
          render={({ match }) => {
            return <EventDetailPage id={match.params.event_id} saveEvent={saveEvent} />
          }}
        />
        <Route
          exact
          path="/park/:park_code"
          render={({ match }) => {
            return <ParkDetailPage parkCode={match.params.park_code} savePark={savePark} />
          }}
        />
        <Route
          exact
          path="/search"
          render={() => {
            return (
              <main>
                {!stateCode.length && <Redirect to="/" />}
                <Nav />
                <EventSearch stateCode={stateCode} savedEvents={savedEvents} savedParks={savedParks} />
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
                <SavedEvents savedEvents={savedEvents} />
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
                <SavedParks savedParks={savedParks} />
              </main>
            )
          }}
        />
        <Route
          exact
          path="/"
          render={() => {
            return (
              <main>
                <Nav />
                <section className="landing-page">
                  <div className="selector">
                    <label for="stateCodeSelector">Select Your State</label>
                    <select
                      name="stateCode"
                      id="stateCodeSelector"
                      onChange={updateStateCode}
                    >
                      <option disabled selected value="null">--</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">Sourth Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                    <NavLink exact to="/search"><button className="see-events-button">See Events</button></NavLink>
                  </div>
                  <img src="https://www.nps.gov/npgallery/GetAsset/F274C1CA-155D-451F-67F12CC510281EFF/proxy/hires" alt="Glacier National Park" className="intro-img" />
                </section>
              </main>
            )
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

App.propTypes = {
  savedParks: PropTypes.array,
  savedEvents: PropTypes.array,
  stateCode: PropTypes.string
}

export default App;
