import React from "react";
import formatDateTime from "../utils/formatLocalTime";

export default function HourlyForecast ({ data }){

    if (!data) {
        return null;
    }


    return (
      <div className="card-hforecast">
        <p>{formatDateTime("short-time", data.time )}</p>
                     <p>{data.temp_c} °C</p>
                     <img src={data.condition.icon} alt="api icon" />
                     {
                        data.chance_of_rain >= 1 &&
                         (
                             <p>Raining: {data.chance_of_rain}%</p> 
                         )
                     }
                     <p>condition text: {data.condition.text}</p>

      </div>  
    )
    // return (
    //     <div className="hforecast_card">

    //         {data.forecast.forecastday[0].hour.map((hour, index) => (
    //             <div key={index}>
    //                 <p>{formatDateTime("short-time", hour.time )}</p>
    //                 <p>{hour.temp_c} °C</p>
    //                 <img src={hour.condition.icon} alt="api icon" />
    //                 {
    //                     hour.chance_of_rain >= 1 &&
    //                     (
    //                         <p>Raining: {hour.chance_of_rain}%</p> 
    //                     )
    //                 }
    //                 <p>condition text: {hour.condition.text}</p>

    //             </div>
    //         ))}
    //     </div>
    // )
}
