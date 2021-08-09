import React from 'react';
import './SavedParks.css';

import ParkCard from '../ParkCard/ParkCard';

const SavedParks = ({savedParks}) => {
  const loadSavedParkCards = () => {
    return savedParks.map((item) => {
      return <ParkCard park={item.data[0]} />;
    })
  }

  return (
    <section className="saved-parks-section">
      <h2>Your Parks</h2>
      {loadSavedParkCards()}
    </section>
  );
}

export default SavedParks;
