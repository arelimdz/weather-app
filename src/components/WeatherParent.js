import SearchCity from './SearchCity';
import { useState} from "react";
import useWeatherFetch from "../utils/fetchWeather";
import WeatherDisplay from "./WeatherDisplay";
import "../styles/Forecast.css";
import { ClipLoader } from 'react-spinners';



export default function WeatherParent(){
  const [city, setCity] = useState("");

  // Call the weather fetch component to use  "weatherData"
  const {weatherData, loading, error} = useWeatherFetch(city);

  const handleUpdateCity = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className='Parent'>
      <h1 className="AppName">Weather finder</h1>
      <SearchCity onUpdateCity={handleUpdateCity} />
      {loading ? (
        // Display a loading effect if data loading
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <ClipLoader
              color="#6d01ba"
              size={150}
              loading={loading}
          />
        </div>
      ) : error ? (
        // Display an error message if an error occurred
        <p className='errorMessage'>{error}</p>
      ) : (
        // Display the weather data if there are not errors and data is laoaded
        <WeatherDisplay ApiData ={weatherData} />
      )}
    </div>
  );
}

