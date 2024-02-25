import React from 'react';
import './App.css';
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Enter a city"
                    />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary w-100">Search</button>
                </div>
                <div className="col-md-2">
                    <button className="btn  btn-success w-100">Local</button>
                </div>
            </div>
            <div className="row py-3">
                <div className="col-md-6">
                    <h2 className="pb-0 mb-0">Grand Junction</h2>
                    <p className="my-0">Sunday 15:00</p>
                    <p className="my-0">Sunny</p>
                </div>
                <div className="col-md-3" />
                <div className="col-md-3">
                    <ReactAnimatedWeather
                        icon="CLEAR_DAY"
                        color="BLACK"
                        size={100}
                        animate={true}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <strong>
                        <p className="fs-1">
                            54<sup className="fs-4">°F | °C</sup>
                        </p>
                    </strong>
                </div>
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
            </div>
        </div>
    );
}
