import React from 'react';
import { NavLink } from 'react-router-dom';

const ParkDetails = ({parkInfo}) => {
  const parkData = parkInfo.data[0];
  console.log(parkData);

  const displayParkImages = () => {
    return parkData.images.map((image, index) => {
      if (index === 0) {
        return;
      } else {
        return (
          <img src={parkData.images[index].url} alt={parkData.images[index].alt} />
        )
      }
    })
  }

  return (
    <>
      <NavLink to='/search'><button>Back</button></NavLink>
      <img src={parkData.images[0].url} alt={parkData.images[0].alt} />
      <h2>{parkData.fullName}</h2>
      <a href={parkData.url}><h3>More Info</h3></a>
      <p>{parkData.description}</p>
      <h3>Directions</h3>
      <p>{parkData.directionsInfo}</p>
      //add table of fees?
      {displayParkImages()}
    </>
  );
}

export default ParkDetails;
