import React, { useState, useEffect } from 'react';
import EventDetails from '../EventDetails/EventDetails';
import './EventDetailPage.css';

import { getSingleEvent } from '../../api-calls/apiCalls';
import { cleanEventData } from '../../utils/utils';

const EventDetailPage = ({id}) => {
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
      {!eventInfo.data ? <h2>Loading . . .</h2> : <EventDetails eventInfo={eventInfo} />}
    </section>
  );
}

export default EventDetailPage;
