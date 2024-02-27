import React, { useState } from 'react';
import axios from 'axios';
import Details from './Details';
import Forecast from "./Forecast";
import { Puff } from 'react-loader-spinner';
import './App.css';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ loaded: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {

        setWeatherData({
            loaded: true,
<<<<<<< HEAD
            temperature: Math.round(response.data.temperature.current),
            humidity: response.data.temperature.humidity,
=======
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
>>>>>>> parent of cd1ee5c (Committing before I cannot undo what I am about to test)
            wind: response.data.wind.speed,
            feelsLike: response.data.temperature.feels_like,
            city: response.data.city,
            country: response.data.country,
            long: response.data.coordinates.longitude,
            lat: response.data.coordinates.latitude,
            description: response.data.condition.description,
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),
        });
    }

    function update() {
        let apiKey = '47ce0ocdabaf4a2e81b031bb9t47a0e0';
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleChange(event) {
        setCity(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        update();
    }

    if (weatherData.loaded) {
        return (
            <div className="container Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-10">
                            <input
                                className="form-control SearchResponsive"
                                type="text"
                                placeholder="Enter a city"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary w-100 SearchResponsive">
                                Search
                            </button>
                        </div>
                    </div>
                </form>
                <Details data={weatherData} />
                <Forecast long={weatherData.long} lat={weatherData.lat}/>
            </div>
        );
    } else {
        update();
        return (
            <Puff
                visible={true}
                height="80"
                width="80"
                color="#000000"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        );
    }
}
