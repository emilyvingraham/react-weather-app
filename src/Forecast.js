import React, { useState } from 'react';
import DetailsIcon from './DetailsIcon';
import axios from 'axios';
import './Forecast.css';

export default function Forecast(props) {
    const [ready, setReady] = useState(false);

    function handleForecastResponse(response) {
        setReady(true);
        console.log(response.data);
    }

    if (ready) {
        return (
            <div className="Forecast">
                <div className="row">
                    <div className="col Forecast-column">
                        <div className="Forecast-day">Thursday</div>
                        <DetailsIcon code="01d" size={50} />
                        <div className="Forecast-temperature">
                            <span className="Forecast-temperature-min">
                                18°
                            </span>
                            <span className="Forecast-temperature-max">
                                55°
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        let apiKey = '47ce0ocdabaf4a2e81b031bb9t47a0e0';
        let city = props.data.city;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

        axios.get(apiUrl).then(handleForecastResponse);

        return null;
    }
}
