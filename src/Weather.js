import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

export default function Weather() {
    const [loaded, setLoaded] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    function handleResponse(response) {
        console.log(response.data);
        setLoaded(true);
        setWeatherData({
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            sunset: 'insert',
            city: response.data.name,
            country: response.data.sys.country,
            long: response.data.coord.lon,
            lat: response.data.coord.lat,
            description: response.data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            date: 'Sunday 16:00',
        });
    }

    if (loaded) {
        return (
            <div className="container Weather">
                <div className="row">
                    <div className="col-md-8">
                        <input
                            className="form-control SearchResponsive"
                            type="text"
                            placeholder="Enter a city"
                        />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary w-100 SearchResponsive">
                            Search
                        </button>
                    </div>
                    <div className="col-md-2">
                        <button className="btn  btn-success w-100">
                            Local
                        </button>
                    </div>
                </div>
                <div className="row py-3 TextResponsive">
                    <div className="col-md-6">
                        <h2 className="pb-0 mb-0">
                            <strong>{weatherData.city}</strong>
                        </h2>
                        <p className="mb-0">{weatherData.date}</p>
                        <p className="text-capitalize">
                            {weatherData.description}
                        </p>
                    </div>
                    <div className="col-md-3">
                        <p className="fs-1">
                            <strong>{weatherData.temperature}</strong>
                            <sup className="fs-6">
                                <strong className="degrees">°F | °C</strong>
                            </sup>
                        </p>
                    </div>
                    <div className="col-md-3">
                        <img
                            src={weatherData.icon}
                            alt={weatherData.description}
                        />
                    </div>
                </div>
                <div className="row TextResponsive">
                    <div className="col-md-2" />
                    <div className="col-md-4 lh-1">
                        <ul>
                            <li>
                                <strong>Country:</strong> {weatherData.country}
                            </li>
                            <li>
                                <strong>Lon:</strong> {weatherData.long}°
                            </li>
                            <li>
                                <strong>Lat:</strong> {weatherData.lat}°
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 lh-1">
                        <ul>
                            <li>
                                <strong>Sunset:</strong> {weatherData.sunset}
                            </li>
                            <li>
                                <strong>Humidity:</strong>{' '}
                                {weatherData.humidity}%
                            </li>
                            <li>
                                <strong>Wind:</strong> {weatherData.wind}mph
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2" />
                </div>
            </div>
        );
    } else {
        let apiCity = 'Denver';
        let apiKey = '8c78e9e7e9928cd1a2a6f923072c3dec';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&APPID=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);

        return 'Loading';
    }
}
