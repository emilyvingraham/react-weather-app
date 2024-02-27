import React from 'react';
import DetailsIcon from './DetailsIcon';
import axios from "axios";
import './Forecast.css';

export default function Forecast(props) {
    function handleForecastResponse(response) {
        console.log(response.data);
    }
    

    let apiKey = '8c78e9e7e9928cd1a2a6f923072c3dec';
    let longitude = props.long;
    let latitude = props.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleForecastResponse);

    return (
        <div className="Forecast">
            <div className="row">
                <div className="col Forecast-column">
                    <div className="Forecast-day">Wednesday</div>
                    <div className="Forecast-icon">
                        <DetailsIcon code="01d" size={50} />
                    </div>
                    <div className="Forecast-temperature">
                        <span className="Forecast-temperature-min">39°F</span>
                        <span className="Forecast-temperature-max">44°F</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
