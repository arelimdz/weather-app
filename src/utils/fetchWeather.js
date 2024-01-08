
import { useState, useEffect } from "react";



export default function useWeatherFetch(city) {

    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=10&aqi=no&alerts=no`;

    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchWeatherData = async ()=> {
        if (!city) return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                if (response.status === 400) {
                    throw new Error('City not found');
                }
                throw new Error('Network response was not ok');
            }
        
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error("Error fetching weather data: ", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    fetchWeatherData ();
    },[city, apiUrl]);

    return { weatherData, loading, error}
}
