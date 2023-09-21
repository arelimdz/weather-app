import React, { Component } from "react";
import API_KEY from '../config';
import SearchCity from './SearchCity';
import { formatLocalTime } from "../utils/formatLocalTime";


class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: null, // Initialize weatherData state as null
    };

    this.fetchWeatherData = this.fetchWeatherData.bind(this);
  }


  // Function that handles API requests for weatherdata for initial data or for updated data.
  fetchWeatherData = async (city) => {
    // Fetch data from Openweathermap API using city name and set it to the state of weatherData variable
    // const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    
    try {
      // Make an API request to fetch weather data
      let apiResponse = await fetch(apiUrl);

      if (!apiResponse.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse the JSON response
      let apiData = await apiResponse.json();
      console.log(apiData); // Log the fetched data to the console

      // Update the component state with the fetched data
      this.setState({ weatherData: apiData });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }

  }

  render() {
    // Destructure weatherData from state
    const { weatherData } = this.state; 

    // Format local time using the formatLocalTime function
    const formattedLocalTime = weatherData
    ? formatLocalTime(weatherData.location.localtime) // Pass localtime as an argument
    : "";


    return (
      <div>
        <SearchCity onCitySubmit={this.fetchWeatherData} />

        {weatherData ? ( // Conditional rendering based on whether weatherData is available
          <div>
          <h3>Weather in {weatherData.location.name}</h3>
          <h5> {weatherData.location.region},  {weatherData.location.country}</h5>
          <h4> {formattedLocalTime}</h4>

          <h1>Temperature: {weatherData.current.temp_c}°C</h1>
          <p>Weather: {weatherData.current.condition.text}</p>

          <h3>Forescast</h3>




        </div>
        ) : (
        <div>
            <p>Loading weather data...</p>
          </div>
        )}
      </div>
    );
  }
}

export default Weather;
