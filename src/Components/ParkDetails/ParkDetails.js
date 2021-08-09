import React from 'react';
import { NavLink } from 'react-router-dom';
import './ParkDetails.css';

const ParkDetails = ({parkInfo, savePark}) => {
  const parkData = parkInfo.data[0];

  const displayParkImages = () => {
    return parkData.images.map((image, index) => {
      if (index === 0) {
        return;
      } else {
        return (
          <img src={parkData.images[index].url} alt={parkData.images[index].alt} className="park-detail-image" />
        )
      }
    })
  }

  const handleClick = () => {
    savePark(parkInfo);
  }

  console.log(parkData);

  return (
    <>
      <NavLink to='/search'><button className="back-button detail-page-button">Back</button></NavLink>
      {!parkData && <h2 className="error-message detail-page-error">Warning: Data for this park could not be found.</h2>}
      {!!parkData &&
        <>
          <img src={parkData.images[0].url} alt={parkData.images[0].alt} className="park-detail-image" />
          <button onClick={handleClick} className="save-button detail-page-button">Save Park</button>
          <div className="park-detail-text">
            <h2>{parkData.fullName}</h2>
            <a href={parkData.url} className="external-link"><h3>More Info</h3></a>
            <p>{parkData.description}</p>
            <h3>Directions</h3>
            <p>{parkData.directionsInfo}</p>
          </div>
          {displayParkImages()}
        </>
      }
    </>
  );
}

export default ParkDetails;
