import React, { useState, useEffect } from 'react';
import './EventSearch.css';

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

  console.log(allEvents);

  const loadEventCards = () => {
    return allEvents.data.map((event) => {
      return <h2>EVENT!</h2>;
    })
  }

  return (
    <section className="eventCards">
      {!allEvents.data ? <h2>Loading . . .</h2> : loadEventCards()}
    </section>
  );
}

export default EventSearch;
