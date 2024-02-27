import React from 'react';
import FormattedDate from './FormattedDate';
import FormattedSunset from './FormattedSunset';
import DetailsIcon from './DetailsIcon';
import TemperatureUnit from './TemperatureUnit';

export default function Details(props) {
    return (
        <div>
            <div className="row py-3 TextResponsive">
                <div className="col-md-6">
                    <h2 className="pb-0 mb-0">
                        <strong>{props.data.city}</strong>
                    </h2>
                    <p className="mb-0">
                        <FormattedDate date={props.data.date} />
                    </p>
                    <p className="text-capitalize">{props.data.description}</p>
                </div>
                <div className="col-md-3">
                    <p className="temperature">
                        <TemperatureUnit fahrenheit={props.data.temperature} />
                    </p>
                </div>
                <div className="col-md-3">
                    <DetailsIcon
                        code={props.data.icon}
                        size={100}
                        color="#265073"
                    />
                </div>
            </div>
            <div className="row TextResponsive">
                <div className="col-md-2" />
                <div className="col-md-4 lh-1">
                    <ul>
                        <li>
                            <strong>Country:</strong> {props.data.country}
                        </li>
                        <li>
                            <strong>Lon:</strong> {props.data.long}°
                        </li>
                        <li>
                            <strong>Lat:</strong> {props.data.lat}°
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 lh-1">
                    <ul>
                        <li>
                            <strong>Sunset:</strong>{' '}
                            <FormattedSunset date={props.data.sunset} />
                        </li>
                        <li>
                            <strong>Humidity:</strong> {props.data.humidity}%
                        </li>
                        <li>
                            <strong>Wind:</strong> {props.data.wind} mp/h
                        </li>
                    </ul>
                </div>
                <div className="col-md-2" />
            </div>
        </div>
    );
}
