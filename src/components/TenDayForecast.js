import React from "react";
import formatDateTime from "../utils/formatLocalTime";

const TenDayForecast = ({ weatherData }) => {
  // Ensure that weatherData exists and has at least 10 days of forecast
  if (!weatherData || !weatherData.forecast || !weatherData.forecast.forecastday) {
    return null;
  }

return (
  <div>
    <h2>Ten-Day Forecast</h2>
    <div className="ten-day-forecast">
      {weatherData.forecast.forecastday.slice(0, 10).map((day, index) => (
        <div key={index} className="forecast">
          <h3>{formatDateTime(day.date)}</h3> {/* Format the date here */}
          <p>Date: {day.date}</p>
          <p>Temperature: {day.day.avgtemp_c}°C</p>
          <p>Weather: {day.day.condition.text}</p>
        </div>
      ))}
    </div>
  </div>
);
}

export default TenDayForecast;
