
import React from 'react';
import "./styles/App.css"
import WeatherParent from './components/WeatherParent';
import Clouds from './components/Cluds';

function App(){

  return (
    <div className="App">
        <h1 className="AppName">Weather finder</h1>
        <WeatherParent/>
        <Clouds />
    </div>
  )
  }

export default App;

