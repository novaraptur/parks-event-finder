import React, { useState, useEffect } from 'react';
import './EventSearch.css';

import { getEvents, getSingleEvent, getSinglePark } from '../../api-calls/apiCalls';

const EventSearch = ({stateCode}) => {
  console.log(stateCode);

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

  return (
    <h2>Event Search!</h2>
  );
}

export default EventSearch;
