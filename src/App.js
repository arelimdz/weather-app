
import React from 'react';
import "./styles/App.css"
import HomePage from './pages/HomePage';
import { Route, Routes } from "react-router-dom";
import ForecastPage from './pages/ForecastPage';



// Page that return the weather of a given city
// fetch data from https://www.weatherapi.com/
// Display temp in C
// Display wheater condition: text and icon
// Forescast between 1 to 10


function App(){

  return (
    <div className="App">

        <Routes >
          <Route path="/" element={<HomePage/>} />
          <Route path="/forecast" element={<ForecastPage/>}/>
        </Routes>
    </div>
  )
  }

export default App;

