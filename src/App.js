import React from 'react';
import Weather from './Weather.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
    return (
        <div className="App container">
            <Weather />
            <hr/>
            <Footer />
        </div>
    );
}
