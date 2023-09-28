import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/HomePage.css";


export default function HomePage(props){

	return(	
		<div classNAme="App">
			<div className="cloud x1"></div>
			<div className="weatherLink">
				<h1 className="AppName title">Weather finder</h1>
				<Link to="/forecast">
					<button className="btn subtitle">Search weather</button>
				</Link>
				
			</div>
			<div className="cloud x2"></div>
			<div className="cloud x3"></div>
			<div className="cloud x4"></div>
			<div className="cloud x5"></div>
		</div>		
	)
}
