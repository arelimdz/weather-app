
import React from 'react';
import "./styles/App.css"
import WeatherParent from './components/WeatherParent';
import Clouds from './components/Cluds';

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

