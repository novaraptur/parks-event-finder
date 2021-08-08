import React from 'react';

import { cleanEventData } from '../../utils/utils';

const EventDetails = ({eventInfo}) => {
  const cleanEvent = cleanEventData(eventInfo.data[0]);
  console.log(cleanEvent);
  return (
    <>
      <h2>{cleanEvent.title}</h2>
      <h3>{cleanEvent.parkName}</h3>
    </>
  );
}

export default EventDetails;
