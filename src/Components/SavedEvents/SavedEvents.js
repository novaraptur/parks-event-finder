import React from 'react';
import './SavedEvents.css';

import EventCard from '../EventCard/EventCard';

const SavedEvents = ({savedEvents}) => {
  const loadSavedEventCards = () => {
    console.log(savedEvents);
    return savedEvents.map((item) => {
      console.log(item.data[0]);
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

export default SavedEvents;
