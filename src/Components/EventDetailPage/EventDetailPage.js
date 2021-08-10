import React, { useState, useEffect } from 'react';
import EventDetails from '../EventDetails/EventDetails';
import PropTypes from 'prop-types';
import './EventDetailPage.css';

import { getSingleEvent } from '../../api-calls/apiCalls';

const EventDetailPage = ({id, saveEvent}) => {
  const [eventInfo, setEvent] = useState({});

  useEffect(() => {
    getSingleEvent(id)
    .then((data) => {
      setEvent(data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <section className="event-details">
      {!eventInfo.data ? <h2>Loading . . .</h2> : <EventDetails eventInfo={eventInfo} saveEvent={saveEvent} />}
    </section>
  );
}

EventDetailPage.propTypes = {
  id: PropTypes.number,
  saveEvent: PropTypes.func
}

export default EventDetailPage;
