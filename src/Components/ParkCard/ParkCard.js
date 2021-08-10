import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ParkCard.css';

const ParkCard = ({park}) => {
  return (
    <NavLink to={`/park/${park.parkCode}`}>
      <article id={park.id} className="park-card">
        <img src={`${park.images[0].url}`} className="park-card-image" />
        <div className="park-card-text">
          <h3>{park.fullName}</h3>
          <p>{park.states}</p>
        </div>
      </article>
    </NavLink>
  );
}

ParkCard.propTypes = {
  park: PropTypes.object
}

export default ParkCard;
