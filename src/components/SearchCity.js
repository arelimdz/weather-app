// import React, { Component } from "react";
import { useState } from "react";


export default function SearchCity({ onCityInputChange }){

    const [city, setCity] = useState('');

    const handleSubmit =(event)=>{
        event.preventDefault();
    };

    const handleChangeCity = (event) => {
        const newCity = event.target.value;
        setCity(newCity);

        // Call the callback function to pass the value to the parent
        onCityInputChange(newCity);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name='city'
                    placeholder='Enter City'
                    value={city}
                    onChange={handleChangeCity}/>
                    <button className="searchButton" type="submit">Search</button>
            </form>
        </div>
    );
}







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