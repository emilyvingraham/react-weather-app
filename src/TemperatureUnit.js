import React, { useState } from 'react';
import './App.css';

export default function TemperatureUnit(props) {
    const [unit, setUnit] = useState('fahrenheit');

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit('celsius');
    }

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit('fahrenheit');
    }

    if (unit === 'fahrenheit') {
        return (
            <div className="TemperatureUnit">
                <span>
                    <strong>{props.fahrenheit}</strong>
                </span>
                <span>
                    <sup className="fs-6">
                        <strong className="degrees">°F | </strong>
                        <a
                            href="/"
                            className="degrees"
                            onClick={convertToCelsius}
                        >
                            <strong>C°</strong>
                        </a>
                    </sup>
                </span>
            </div>
        );
    } else {
        let celsius = ((props.fahrenheit - 32) * 5) / 9;

        return (
            <div className="TemperatureUnit">
                <span>
                    <strong>{Math.round(celsius)}</strong>
                </span>
                <span>
                    <sup className="fs-6">
                        <strong className="degrees">°C | </strong>
                        <a
                            href="/"
                            className="degrees"
                            onClick={convertToFahrenheit}
                        >
                            <strong>F°</strong>
                        </a>
                    </sup>
                </span>
            </div>
        );
    }
}
