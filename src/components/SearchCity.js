import React, { Component } from "react";

class SearchCity extends Component{
    constructor(props){
        super(props);

        this.state = {
            city: '',
        };
    }

    handleCityChange =(event) =>{
        this.setState({city : event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting
        // Pass the selected city to the parent component for fetching weather data
        this.props.onCitySubmit(this.state.city);
    };
    
      
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Enter city"
                value={this.state.city}
                onChange={this.handleCityChange}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        );
    }
}

export default SearchCity;