import React, { Component } from "react";

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: null, // Initialize weatherData state as null
    };
  }

  async componentDidMount() {
    try {
      // Make an API request to fetch weather data
      let apiResponse = await fetch("API URL"
      );

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
    const { weatherData } = this.state; // Destructure weatherData from state

    return (
      <div>
        {weatherData ? ( // Conditional rendering based on whether weatherData is available
          <div>
            <h1>Weather in {weatherData.location.name}</h1>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Weather: {weatherData.current.condition.text}</p>
          </div>
        ) : (
          <div>
            <h1>Still loading weather data...</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Weather;
