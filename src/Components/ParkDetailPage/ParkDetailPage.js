import React, { useState, useEffect } from 'react';
import ParkDetails from '../ParkDetails/ParkDetails';
import './ParkDetailPage.css';

import { getSingleParkByParkCode } from '../../api-calls/apiCalls';

const ParkDetailPage = (parkCode) => {
  const [parkInfo, setPark] = useState({});

  useEffect(() => {
    getSingleParkByParkCode(parkCode.code)
      .then((data) => {
        setPark(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <section className="park-details">
      {!parkInfo.data ? <h2>Loading . . .</h2> : <ParkDetails parkInfo={parkInfo} />}
    </section>
  );
}

export default ParkDetailPage;
