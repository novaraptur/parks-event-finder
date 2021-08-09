import React from 'react';
import { NavLink } from 'react-router-dom';
import './EventDetails.css';

import { cleanEventData } from '../../utils/utils';

const EventDetails = ({eventInfo}) => {
  const cleanEvent = cleanEventData(eventInfo.data[0]);
  console.log(cleanEvent);

  const loadDates = () => {
    return cleanEvent.dates.map((date) => {
      return <li>{date}</li>;
    })
  }

  const loadDescription = () => {
    return <div dangerouslySetInnerHTML={{ __html: cleanEvent.description }} />
  }

  return (
    <>
      <NavLink to='/search'><button>Back</button></NavLink>
      <img src={`https://www.nps.gov${cleanEvent.images[0].url}`} />
      <button>Save Event</button>
      <h2>{cleanEvent.title}</h2>
      <NavLink to={`/park/${cleanEvent.siteCode}`}><h3 className="park-link">{cleanEvent.parkName}</h3></NavLink>
      {loadDates()}
      <p>{cleanEvent.times[0].timestart} - {cleanEvent.times[0].timeend}</p>
      {loadDescription()}
    </>
  );
}

export default EventDetails;
