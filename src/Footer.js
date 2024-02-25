import React from "react";
import './App.css';


export default function Footer() {
    return (
        <div className="Footer">
            This project was built by{' '}
            <a
                href="https://github.com/emilyvingraham"
                target="_blank"
                rel="noreferrer"
            >
                Emily Ingraham
            </a>{' '}
            and is{' '}
            <a
                href="https://github.com/emilyvingraham/react-weather-app"
                target="_blank"
                rel="noreferrer"
            >
                open-sourced on Github
            </a>
            .
            <p>👽</p>
        </div>
    );
}