import SearchCity from './SearchCity';
import { useState} from "react";
import useWeatherFetch from "../utils/fetchWeather";
import WeatherDisplay from "./WeatherDisplay";
import "../styles/Forecast.css"



export default function WeatherParent(){
  const [city, setCity] = useState("");

  // Call the weather fetch component to use  "weatherData"
  const {weatherData, loading, error} = useWeatherFetch(city);

  const handleUpdateCity = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className='Parent'>
      <SearchCity onUpdateCity={handleUpdateCity} />
      {loading ? (
        // Display a loading message if data loading
        <p className='loading'>Loading...</p>
      ) : error ? (
        // Display an error message if an error occurred
        <p>{error}</p>
      ) : (
        // Display the weather data if there are not errors and data is laoaded
        <WeatherDisplay ApiData ={weatherData} />
      )}
    </div>
  );
}

