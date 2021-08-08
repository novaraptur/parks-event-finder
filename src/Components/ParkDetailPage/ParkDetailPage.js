import React, { useState, useEffect } from 'react';
import ParkDetails from '../ParkDetails/ParkDetails';
import './ParkDetailPage.css';

import { getSingleParkByParkCode } from '../../api-calls/apiCalls';

const ParkDetailPage = (parkCode) => {
  const [parkInfo, setPark] = useState({});

  useEffect(() => {
    getSingleParkByParkCode(parkCode.code)
      .then((data) => {
        console.log(data);
        setPark(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <h2>PARK DETAIL PAGE!</h2>
  );
}

export default ParkDetailPage;
