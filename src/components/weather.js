import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Weather(props) {

  const {temperatureData, cityData, countryData, pressureData, sunsetData, errorData} = props;

  return (
    <div className="infoWeath">
      { cityData &&
      <div>

        <p> <FontAwesomeIcon icon="city" /> Place: {countryData}, {cityData}</p>
        <p> <FontAwesomeIcon icon="temperature-low" /> Temperature: {temperatureData}</p>
        <p> <FontAwesomeIcon icon="exclamation" /> Pressure: {pressureData}</p>
        <p> <FontAwesomeIcon icon="cloud-sun" /> Sunset: {sunsetData}</p>
      </div>
      }

      <p className="error">{ errorData }</p>
    </div>
  );
}