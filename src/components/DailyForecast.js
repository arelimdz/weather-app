import React from "react";
import formatDateTime from "../utils/formatLocalTime";

const DailyForecast = ({ weatherData }) => {
  // Ensure that weatherData exists 
  if (!weatherData) {
    return null;
  }

  console.log({weatherData})
return (
  <div>

    <h2>Daily Forecast</h2>
    <div className="Daily-forecast">
      {weatherData.forecast.forecastday.map((day, index) => (
        <div key={index} className="forecast">
          <h3>{formatDateTime(day.date)}</h3>
          <p>Temperature: {day.day.avgtemp_c}°C</p>
          <p>Weather: {day.day.condition.text}</p>
        </div>
      ))}
    </div>
  </div>
);
}

export default DailyForecast;
