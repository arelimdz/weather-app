import "../styles/HomePage.css";


export default function HomePage(props){

	return(	
		<div id="clouds">
			<div className="cloud x1"></div>
			<div className="weatherLink">
				<h1 className="AppName">Weather finder</h1>
				<button className="SearchWeathers">Search weather</button>
			</div>
			<div className="cloud x2"></div>
			<div className="cloud x3"></div>
			<div className="cloud x4"></div>
			<div className="cloud x5"></div>
		</div>		
	)
}
