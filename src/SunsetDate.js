import React from 'react';

export default function SunsetDate(props) {
    let hours = props.date.getHours();

    let minutes = props.date.getMinutes();

    return <span>{hours}:{minutes}</span>;
}
