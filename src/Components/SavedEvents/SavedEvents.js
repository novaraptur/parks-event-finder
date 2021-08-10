import React from 'react';
import PropTypes from 'prop-types';
import './SavedEvents.css';

import EventCard from '../EventCard/EventCard';

const SavedEvents = ({savedEvents}) => {
  const loadSavedEventCards = () => {
    return savedEvents.map((item) => {
      return <EventCard event={item.data[0]} />;
    })
  }

  return (
    <section className="saved-events-section">
      <h2>Your Events</h2>
      {loadSavedEventCards()}
    </section>
  );
}

SavedEvents.propTypes = {
  savedEvents: PropTypes.array
}

export default SavedEvents;
