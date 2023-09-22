import './App.css';
import SearchCity from './components/SearchCity';
import Weather from './components/WeatherFather';
import React from 'react';


// Page that return the weather of a given city
// fetch data from https://www.weatherapi.com/
// Display temp in C
// Display wheater condition: text and icon
// Forescast between 1 to 10

class App extends React.Component{

  render(){
    return (
      <div>
        <h1>Weather app</h1>
        <h3>The current weather is:</h3>
        {/* Render the Weather component */}
        <Weather />
      </div>
    )
  }
}

export default App;

