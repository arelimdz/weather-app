import DailyForecast from "./DailyForecast";
import formatDateTime from "../utils/formatLocalTime";
import HourlyForecast from "./HourlyForecast";

export default function WeatherDisplay({ ApiData }) {
    if (!ApiData) {
      return null
    }


    return (
      <div>
        <h2>Weather in {ApiData.location.name}</h2>
        <h2>{ApiData.current.condition.text}</h2>
        <h1>{ApiData.current.temp_c}°C</h1>
        <h3>{formatDateTime("date-time",ApiData.location.localtime)}</h3>
        <div className="hforecast">
          <HourlyForecast data={ApiData}/>
        </div>

        <DailyForecast weatherData={ApiData} />
      </div>
    );
  }
  