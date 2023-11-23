import React from "react";
import formatDateTime from "../utils/formatLocalTime";

const DailyForecast = ({ weatherData }) => {
  // Ensure that weatherData exists 
  if (!weatherData) {
    return null;
  }

return (
  <div className="dforecast">
      {weatherData.forecast.forecastday.map((day, index) => (
        <div key={index} className="forecast">
          <p>{formatDateTime("date",day.date)}</p>
          <p className="condition_text">{day.day.condition.text}</p>
          <div className="dcontent">
            <img className="icon" src={day.day.condition.icon} alt="icon" />
            {day.day.daily_chance_of_rain >=1 &&
            (
              <p className="rain">{day.day.daily_chance_of_rain}% </p>
            )}
          </div>
          <div className="temp_container">
            <p>{day.day.mintemp_c}° </p>
            <div className="bar">
            {/* Assuming that 30 degrees is hights value */}
            <div className="dot" style={{ left: `${(day.day.avgtemp_c / 30) * 100}%` }}></div>
            </div>
            <p>{day.day.maxtemp_c}°</p>
          </div>
        </div>
      ))}
  </div>
);
}

export default DailyForecast;
