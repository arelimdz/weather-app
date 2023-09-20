import React from "react";

export default class Weather extends React.Component {
	constructor(props) {
		super();

		this.state = {
			weatherData: {}
		}
	}

	render(){
		if (this.state.weatherData.location){
			return(
				<div>
					<h1>City found!</h1>
				</div>
			);
		} else {
			return(
				<div>
					<h1>Still laoding weather data...</h1>
				</div>
			)
		}
	}
}