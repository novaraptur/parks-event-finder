import React, { useState, useEffect } from 'react';
import './EventDetailPage.css';

import { getSingleEvent } from '../../api-calls/apiCalls';

const EventDetailPage = ({id}) => {
  const [eventInfo, setEvent] = useState({});

  useEffect(() => {
    getSingleEvent(id)
    .then((data) => {
      setEvent(data);
      console.log(eventInfo);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <h2>EVENT DETAIL PAGE</h2>
  );
}

export default EventDetailPage;
