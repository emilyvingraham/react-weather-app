import React from 'react';
import './App.css';
import ReactAnimatedWeather from 'react-animated-weather';

export default function DetailsIcon(props) {
    const codeMapping = {
        '01d': 'CLEAR_DAY',
        '01n': 'CLEAR_NIGHT',
        '03d': 'CLOUDY',
        '03n': 'CLOUDY',
        '04d': 'CLOUDY',
        '04n': 'CLOUDY',
        '50d': 'FOG',
        '50n': 'FOG',
        '02d': 'PARTLY_CLOUDY_DAY',
        '02n': 'PARTLY_CLOUDY_NIGHT',
        '09d': 'RAIN',
        '09n': 'RAIN',
        '10d': 'RAIN',
        '10n': 'RAIN',
        '11d': 'RAIN',
        '11n': 'RAIN',
        '13d': 'SNOW',
        '13n': 'SNOW',
    };

    return (
        <ReactAnimatedWeather
            icon={codeMapping[props.code]}
            color="#265073"
            size={100}
            animate={true}
        />
    );
}
