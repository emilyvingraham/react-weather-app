import React from 'react';
import DetailsIcon from './DetailsIcon';
import './Forecast.css';

export default function Forecast() {
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
