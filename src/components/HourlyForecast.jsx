import React from "react";
import formatDateTime from "../utils/formatLocalTime";

export default function HourlyForecast ({ data }){

    if (!data) {
        return null;
    }


    return (
        <div className="card-hforecast">
            <h4 className="time">{formatDateTime("short-time", data.time )}</h4>
            <div className="content">
                <img className="icon" src={data.condition.icon} alt="api icon" />
                {data.chance_of_rain >= 1 &&
                    (
                        <h4 className="rain">{data.chance_of_rain}%</h4> 
                    )
                }
            </div>

            <h3 className="temp">{data.temp_c}°C</h3>
        </div>  
    )
}
