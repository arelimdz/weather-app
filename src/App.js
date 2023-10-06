
import React from 'react';
import "./styles/App.css"
import WeatherParent from './components/WeatherParent';
import Clouds from './components/Cluds';



// Page that return the weather of a given city
// fetch data from https://www.weatherapi.com/
// Display temp in C
// Display wheater condition: text and icon
// Forescast between 1 to 10


function App(){

  return (
    <div className="App">
        <Clouds classNAme="clouds_container"/>
        <h1 className="AppName title">Weather finder</h1>
        <WeatherParent/>
    </div>
  )
  }

export default App;

