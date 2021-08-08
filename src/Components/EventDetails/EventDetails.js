import React from 'react';

const EventDetails = ({eventInfo}) => {
  console.log(eventInfo);
  return (
    <>
      <h2>{eventInfo.title}</h2>
    </>
  );
}

export default EventDetails;
