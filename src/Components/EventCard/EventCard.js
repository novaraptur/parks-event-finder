import React from 'react';
import './EventCard.css';

import { cleanEventData } from '../../utils/utils';

const EventCard = ({event}) => {
  const cleanEvent = cleanEventData(event);
  return (
    <article id={cleanEvent.id} className="event-card">
      <h3>{cleanEvent.title}</h3>
    </article>
  );
}

export default EventCard;
