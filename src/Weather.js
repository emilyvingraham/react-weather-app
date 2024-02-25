import './Weather.css';
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Enter a city"
                    />
                </div>
                <div className="col-md-4">
                    <button className="btn btn-primary">Search</button>
                </div>
                <div className="col-md-4">
                    <button className="btn  btn-success">Current</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h2>Grand Junction</h2>
                    <p>Sunny</p>
                </div>
                <div className="col-md-3">
                    <ReactAnimatedWeather
                        icon="CLEAR_DAY"
                        color="BLACK"
                        size={100}
                        animate={true}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h2>54°F | °C</h2>
                </div>
                <div className="col-md-4">
                    <ul>
                        <li>Colorado, USA</li>
                        <li>Longetitude</li>
                        <li>Latitude</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul>
                        <li>Preciptation: 0%</li>
                        <li>Humidity: 0%</li>
                        <li>Wind: 5mph</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
