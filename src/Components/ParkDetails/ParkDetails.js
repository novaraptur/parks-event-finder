import React from 'react';
import { NavLink } from 'react-router-dom';

const ParkDetails = ({parkInfo, savePark}) => {
  const parkData = parkInfo.data[0];

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

  const handleClick = () => {
    savePark(parkInfo);
  }

  return (
    <>
      <NavLink to='/search'><button>Back</button></NavLink>
      <img src={parkData.images[0].url} alt={parkData.images[0].alt} />
      <button onClick={handleClick}>Save Park</button>
      <h2>{parkData.fullName}</h2>
      <a href={parkData.url}><h3>More Info</h3></a>
      <p>{parkData.description}</p>
      <h3>Directions</h3>
      <p>{parkData.directionsInfo}</p>
      {displayParkImages()}
    </>
  );
}

export default ParkDetails;
