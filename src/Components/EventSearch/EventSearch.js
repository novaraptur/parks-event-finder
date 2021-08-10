import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './EventSearch.css';

import EventCard from '../EventCard/EventCard';

import { getEvents, getSingleEvent, getSinglePark } from '../../api-calls/apiCalls';

const EventSearch = ({stateCode, savedEvents, savedParks}) => {
  const [allEvents, setAllEvents] = useState({});

  useEffect(() => {
    getEvents(stateCode)
      .then((data) => {
        setAllEvents(data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const loadEventCards = () => {
    return allEvents.data.map((item) => {
      return <EventCard event={item} />;
    })
  }

  return (
    <section className="eventCards">
      {!allEvents.data ? <h2>Loading . . .</h2> : loadEventCards()}
    </section>
  );
}

EventSearch.propTypes = {
  stateCode: PropTypes.string,
  getSingleEvent: PropTypes.func,
  getSinglePark: PropTypes.func
}

export default EventSearch;
