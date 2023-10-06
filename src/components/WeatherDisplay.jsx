import DailyForecast from "./DailyForecast";
import formatDateTime from "../utils/formatLocalTime";
import HourlyForecast from "./HourlyForecast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


export default function WeatherDisplay({ ApiData }) {
    if (!ApiData) {
      return null
    }
    const timeIndexStart = ()=>{
        const date = new Date(ApiData.location.localtime);
        const hours = date.getHours(); 
        return hours
    }

    const allItems = ApiData.forecast.forecastday[0].hour
    const startingIndex = timeIndexStart()
    const items = allItems.slice(startingIndex, allItems.length)

    return (
      <div className="Display">
        <h2>{ApiData.location.name}</h2>
        <h3>{ApiData.current.condition.text}</h3>
        <h1>{ApiData.current.temp_c}°C</h1>
        <h3>{formatDateTime("date-time",ApiData.location.localtime)}</h3>

        <div className="hforecast_container">
          <div className="forecast_title">
            <FontAwesomeIcon className="forecast_title"  icon={faClock} />
            <p>HOURLY FORECAST</p>
          </div>
          <div className="hforecast_list">
            {items.map((item) => (
                  <HourlyForecast  key={item.id} data={item} />
              ))}
          </div>
        </div>
        <div className="dforecast_container">
          <p className="forecast_title" >DAILY FORECAST</p>
          <DailyForecast weatherData={ApiData} />
        </div>

      </div>
    );
  }
  