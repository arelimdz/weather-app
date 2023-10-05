import "../styles/ForecastPage.css"
import WeatherParent from "../components/WeatherParent";


export default function ForecastPage(){
        return(
                <div className="main">
                        <h1 className="title">Weather Finder</h1>
                        <WeatherParent className="parent_container"/>

                </div>
	)
}

