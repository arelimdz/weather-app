import formatDateTime from "../utils/formatLocalTime";
import TenDayForecast from "./TenDayForecast";

export default function WeatherDisplay({ ApiData }) {
    if (!ApiData) {
      return 
    }

    return (
      <div>
        <h3>Weather in {ApiData.location.name}</h3>
        <h5> {ApiData.location.region}, {ApiData.location.country}</h5>
        {/* Render other weather information here */}
      </div>
    );
  }
  