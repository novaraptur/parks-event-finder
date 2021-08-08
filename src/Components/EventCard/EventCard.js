import React from 'react';
import { NavLink } from 'react-router-dom';
import './EventCard.css';

import { cleanEventData } from '../../utils/utils';

const EventCard = ({event}) => {
  const cleanEvent = cleanEventData(event);
  return (
    <NavLink to={`/event/${cleanEvent.id}`}>
      <article id={cleanEvent.id} className="event-card">
        //ADD ALT TEXT
        <img src={`https://www.nps.gov${cleanEvent.images[0].url}`} />
        <h3>{cleanEvent.title}</h3>
        <p>{cleanEvent.parkName}</p>
        <p>{cleanEvent.dates[0]}</p>
        <p>{cleanEvent.times[0].timestart} - {cleanEvent.times[0].timeend}</p>
      </article>
    </NavLink>
  );
}

export default EventCard;
