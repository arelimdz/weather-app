import SearchCity from './SearchCity';

import { useState} from "react";
import useWeatherFetch from "../utils/fetchWeather";
import WeatherDisplay from "./WeatherDisplay";


export default function WeatherParent(){
  const [city, setCity] = useState("");

  // Call the weather fetch component to use  "weatherData"
  const {weatherData, loading, error} = useWeatherFetch(city);

  const handleUpdateCity = (newCity) => {
    setCity(newCity);
  };

  return (
    <div>
      <SearchCity onUpdateCity={handleUpdateCity} />
      {loading ? (
        // Display a loading message if data loading
        <p>Loading...</p>
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






// *** CODE SAME AS AVOBE BUT USING CLASS COMPONENTS

// import React, { Component} from "react";

// class Weather extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       weatherData: null, // Initialize weatherData state as null
//     };

//     this.fetchWeatherData = this.fetchWeatherData.bind(this);
//   }


//   // Function that handles API requests for weatherdata for initial data or for updated data.
//   fetchWeatherData = async (city) => {
//     // Fetch data from Openweathermap API using city name and set it to the state of weatherData variable
//     // const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
//     const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=10&aqi=no&alerts=no`
    
//     try {
//       // Make an API request to fetch weather data
//       let apiResponse = await fetch(apiUrl);

//       if (!apiResponse.ok) {
//         throw new Error("Network response was not ok");
//       }

//       // Parse the JSON response
//       let apiData = await apiResponse.json();
//       console.log(apiData); // Log the fetched data to the console

//       // Update the component state with the fetched data
//       this.setState({ weatherData: apiData });
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }

//   }

//   render() {
//     // Destructure weatherData from state
//     const { weatherData } = this.state; 

//     // Format local time using the formatDateTime function
//     const formattedLocalTime = weatherData
//     ? formatDateTime(weatherData.location.localtime) // Pass localtime as an argument
//     : "";

//     return (
//       <div>
//         <SearchCity onCitySubmit={this.fetchWeatherData} />

//         {weatherData ? ( // Conditional rendering based on whether weatherData is available
//           <div>
//           <h3>Weather in {weatherData.location.name}</h3>
//           <h5> {weatherData.location.region},  {weatherData.location.country}</h5>
//           <h4> {formattedLocalTime}</h4>

//           <h1>Temperature: {weatherData.current.temp_c}°C</h1>
//           <p>Weather: {weatherData.current.condition.text}</p>

//           <h3>Forescast for tomorrow</h3>

//           <div className="forescast">
//           <TenDayForecast weatherData={weatherData} />
//           </div>


//         </div>
//         ) : (
//         <div>
//             <p>Loading weather data...</p>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default Weather;
