import React from 'react';
import './EventCard.css';

const EventCard = ({event}) => {
  return (
    <article id={event.id} classname="event-card">
      <h3>{event.title}</h3>
    </article>
  );
}

export default EventCard;
