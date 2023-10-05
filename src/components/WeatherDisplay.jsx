import DailyForecast from "./DailyForecast";
import formatDateTime from "../utils/formatLocalTime";
import HourlyForecast from "./HourlyForecast";

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
      <div>
        <h2>Weather in {ApiData.location.name}</h2>
        <h2>{ApiData.current.condition.text}</h2>
        <h1>{ApiData.current.temp_c}°C</h1>
        <h3>{formatDateTime("date-time",ApiData.location.localtime)}</h3>
        <p>{timeIndexStart()}</p>
        <div className="hforecast">
          <h2>Hourly forecast</h2>

          {items.map((item) => (
              <HourlyForecast key={item.id} data={item} />
          ))}


          {/* {ApiData.forecast.forecastday[0].hour.map((item) => (
              <HourlyForecast key={item.id} data={item} />
          ))} */}

          {/* <HourlyForecast data={ApiData}/> */}
        </div>
        
        <DailyForecast weatherData={ApiData} />
      </div>
    );
  }
  