import React, { useState, useEffect } from 'react';
import ParkDetails from '../ParkDetails/ParkDetails';
import PropTypes from 'prop-types';
import './ParkDetailPage.css';

import { getSingleParkByParkCode } from '../../api-calls/apiCalls';

const ParkDetailPage = ({parkCode, savePark}) => {
  const [parkInfo, setPark] = useState({});

  useEffect(() => {
    getSingleParkByParkCode(parkCode)
      .then((data) => {
        setPark(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <section className="park-details">
      {!parkInfo.data ? <h2>Loading . . .</h2> : <ParkDetails parkInfo={parkInfo} savePark={savePark} />}
    </section>
  );
}

ParkDetailPage.propTypes = {
  parkCode: PropTypes.string,
  savePark: PropTypes.func
}

export default ParkDetailPage;
