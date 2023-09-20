import './App.css';
import Weather from './Weather';
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

  decreaseDayCount(currentCount){
    if (currentCount > 0){
      this.setState({dayCount: this.state.dayCount - 1});
    }
  }

  addDayCount(currentCount){
    if (currentCount <= 10 ){
      this.setState({dayCount: this.state.dayCount + 1});
    } else {
      console.log('Max forecast days reached');
    }
  }

  render(){
    return (
      <div>
        <h1>Weather app</h1>
        <h3>The current weather in Melbourne is:</h3>
        <Weather/>

        <button onClick={() =>{this.addDayCount(this.state.dayCount)}}>Add day</button>
        <button onClick={() =>{this.decreaseDayCount(this.state.dayCount)}}>Remove day</button>

        <h3>The weather tomorro will be</h3>
      </div>
    )
  }
}

export default App;