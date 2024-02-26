import React from 'react';
import FormattedDate from './FormattedDate';
import FormattedSunset from './FormattedSunset';

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
                        <strong>{props.data.temperature}</strong>
                        <sup className="fs-6">
                            <strong className="degrees">°F | °C</strong>
                        </sup>
                    </p>
                </div>
                <div className="col-md-3">
                    <img src={props.data.icon} alt={props.data.description} />
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
                            <strong>Wind:</strong> {props.data.wind}mph
                        </li>
                    </ul>
                </div>
                <div className="col-md-2" />
            </div>
        </div>
    );
}
