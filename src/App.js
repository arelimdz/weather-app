import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Router, Routes } from 'react-router-dom';
import ForecastPage from './pages/ForecastPage';



// Page that return the weather of a given city
// fetch data from https://www.weatherapi.com/
// Display temp in C
// Display wheater condition: text and icon
// Forescast between 1 to 10


function App(){

  return (
    <div className="App">

      <h1>This is show everywere</h1>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/forecast" element={<ForecastPage/>}/>
      </Routes>

    </div>
  )




}

// class App extends React.Component{

//   render(){
//     return (
//       <div>
//         <Routes>
//           <Route path="/" element={<HomePage />} /> 
//         </Routes>
//       </div>
//     )
//   }
// }

export default App;

