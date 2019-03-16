import React from 'react';

export default function Weather(props) {

  const {temperatureData, cityData, countryData, pressureData, sunsetData, errorData} = props;

  return (
    <div className="infoWeath">
      { cityData &&
      <div>
        <p>Place: {countryData}, {cityData}</p>
        <p>Temperature: {temperatureData}</p>
        <p>Pressure: {pressureData}</p>
        <p>Sunset: {sunsetData}</p>
      </div>
      }

      <p className="error">{ errorData }</p>
    </div>
  );
}