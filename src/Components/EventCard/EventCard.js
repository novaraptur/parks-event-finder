import React from 'react';
import './EventCard.css';

import { cleanEventData } from '../../utils/utils';

const EventCard = ({event}) => {
  const cleanEvent = cleanEventData(event);
  return (
    <article id={cleanEvent.id} className="event-card">
      <h3>{cleanEvent.title}</h3>
      <p>{cleanEvent.parkName}</p>
      <p>{cleanEvent.dates[0]}</p>
      <p>{cleanEvent.times[0].timestart} - {cleanEvent.times[0].timeend}</p>
    </article>
  );
}

export default EventCard;
