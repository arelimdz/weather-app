import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


function SearchCity({ onUpdateWeather }) {
    const [city, setCity] = useState("");
  
    const handleSearch = () => {
      onUpdateWeather(city);
    };

    function toggleShow () {
      var el = document.getElementById("box");
      el.classList.toggle("show");
    }
    const handleSearchAndToggleShow = () => {
      handleSearch();
      toggleShow();
    };
  
    return (
      <div className="searchbox">
        <input
        id='box'
          className="input_containter subtitle"
          type="text"
          placeholder="Search city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {/* <button className="search-btn" onClick={handleSearch}>Search</button> */}
        <FontAwesomeIcon className='search_icon' icon={faMagnifyingGlass}  onClick={handleSearchAndToggleShow } />
      </div>
    );
}


export default SearchCity;




// *** SAME CODE AS ABOVE BUT USING CLASS COMPONENT ***

// import React, { Component } from "react";

// class SearchCity extends Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             city: '',
//         };
//     }

//     handleCityChange =(event) =>{
//         this.setState({city : event.target.value});
//     };

//     handleSubmit = (event) => {
//         event.preventDefault(); // Prevent the form from submitting
//         // Pass the selected city to the parent component for fetching weather data
//         this.props.onCitySubmit(this.state.city);
//     };
    
      
//     render() {
//         return (
//             <div>
//             <form onSubmit={this.handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Enter city"
//                 value={this.state.city}
//                 onChange={this.handleCityChange}
//               />
//               <button className="searchButton" type="submit">Search</button>
//             </form>
//           </div>
//         );
//     }
// }

// export default SearchCity;