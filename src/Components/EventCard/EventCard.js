import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './EventCard.css';

import { cleanEventData } from '../../utils/utils';

const EventCard = ({event}) => {
  const cleanEvent = cleanEventData(event);
  return (
    <NavLink to={`/event/${cleanEvent.id}`}>
      <article id={cleanEvent.id} className="event-card">
        <img src={`https://www.nps.gov${cleanEvent.images[0].url}`} className="event-card-image" />
        <div className="event-card-text">
          <h3>{cleanEvent.title}</h3>
          <p>{cleanEvent.parkName}</p>
          <p>{cleanEvent.dates[0]}</p>
          <p>{cleanEvent.times[0].timestart} - {cleanEvent.times[0].timeend}</p>
        </div>
      </article>
    </NavLink>
  );
}

EventCard.propTypes = {
  event: PropTypes.object
}

export default EventCard;
