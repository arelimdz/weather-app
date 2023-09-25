import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';



// Page that return the weather of a given city
// fetch data from https://www.weatherapi.com/
// Display temp in C
// Display wheater condition: text and icon
// Forescast between 1 to 10

class App extends React.Component{

  render(){
    return (
      <div>
        <HomePage/>
      </div>
    )
  }
}

export default App;

