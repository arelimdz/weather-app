import './App.css';
import Weather from './components/Weather';
import React from 'react';


// Page that return the weather of a given city
// fetch data from https://www.weatherapi.com/
// Display temp in C
// Display wheater condition: text and icon
// Forescast between 1 to 10

class App extends React.Component{
  constructor(){
    super();

    //  start with at least current weather and one day after
    this.state = {
      dayCount : 1,
      city: 'cityName'
    }
  }

  render(){
    return (
      <div>
        <h1>Weather app</h1>
        <h3>The current weather in Melbourne is:</h3>
        <Weather/>
      </div>
    )
  }
}

export default App;

