import React from 'react';
import axios from 'axios';
import './App.css';
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather() {
    let apiKey = '8c78e9e7e9928cd1a2a6f923072c3dec';
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
    return (
        <div className="container">
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
                    <button className="btn  btn-success w-100">Local</button>
                </div>
            </div>
            <div className="row py-3 TextResponsive">
                <div className="col-md-6">
                    <h2 className="pb-0 mb-0">
                        <strong>Grand Junction</strong>
                    </h2>
                    <p>Sunny</p>
                </div>
                <div className="col-md-3">
                    <p className="fs-1">
                        <strong>54</strong>
                        <sup className="fs-6">
                            <strong>°F | °C</strong>
                        </sup>
                    </p>
                </div>
                <div className="col-md-3">
                    <ReactAnimatedWeather
                        icon="CLEAR_DAY"
                        color="BLACK"
                        size={75}
                        animate={true}
                    />
                </div>
            </div>
            <div className="row TextResponsive">
                <div className="col-md-2" />
                <div className="col-md-4 lh-1">
                    <ul>
                        <li>Colorado, USA</li>
                        <li>Longetitude</li>
                        <li>Latitude</li>
                    </ul>
                </div>
                <div className="col-md-4 lh-1">
                    <ul>
                        <li>Preciptation: 0%</li>
                        <li>Humidity: 0%</li>
                        <li>Wind: 5mph</li>
                    </ul>
                </div>
                <div className="col-md-2" />
            </div>
        </div>
    );
}
