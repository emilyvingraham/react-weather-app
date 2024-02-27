import React, { useState } from 'react';
import axios from 'axios';
import Details from './Details';
import Forecast from './Forecast';
import { Puff } from 'react-loader-spinner';
import './App.css';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ loaded: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            loaded: true,
            coordinates: response.data.coord,
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            sunset: new Date(response.data.sys.sunset * 1000),
            city: response.data.name,
            country: response.data.sys.country,
            long: response.data.coord.lon,
            lat: response.data.coord.lat,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),
        });
    }

    function update() {
        let apiKey = '8c78e9e7e9928cd1a2a6f923072c3dec';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`;
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
                <Forecast  coordinates={weatherData.coordinates}/>
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
