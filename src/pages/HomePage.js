import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/HomePage.css";
import WeatherParent from '../components/WeatherFather';


export default function HomePage(props){

	return(	
		<div classNAme="App">
			<div className="cloud x1"></div>
			<div className="weatherLink">
				<h1 className="AppName title">Weather finder</h1>
				<WeatherParent />
			</div>
			<div className="cloud x2"></div>
			<div className="cloud x3"></div>
			<div className="cloud x4"></div>
			<div className="cloud x5"></div>
		</div>		
	)
}


// *** TO USE TO RENDER:
// --- Current time & Date
// --- Weather of current location (user location)

// import { createBrowserRouter, RouterProvider, useLoaderData } from "react-router-dom";
// function App(){
//     const routes = createBrowserRouter([
//         {
//             path: "/",
//             element: <Homepage />,
//             loader: async () => {
//                 // Make an API request here.
//                 // return whatever data you want
//                 // and it will be available to the rendered component
//                 return {example:"Example data router data here!"}
//             }
//         }
//     ]);

//     return(
//         <RouterProvider router={routes} />
//     )
// }