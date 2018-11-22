import React, { Component } from "react";
import "./App.css";

class App extends Component {
  condition = {
    city: "Lisbon",
    description: "Clouds",
    imgUrl: "http://openweathermap.org/img/w/02d.png",
    precipitation: "62%",
    temperature: 12,
    time: "Thu 15:09",
    wind: "4 km/h"
  };

  render() {
    return (
      <div className="weather-summary">
        <div className="weather-summary-header">
          <h1>{this.condition.city}</h1>
          <div className="weather-detail__text">{this.condition.time}</div>
          <div className="weather-detail__text">
            {this.condition.description}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="clearfix">
              <img
                className="weather__icon weather__icon--today"
                alt="weather icon"
                src={this.condition.imgUrl}
              />
              <div className="weather-temp weather-temp--today">
                {this.condition.temperature}
              </div>
              <div className="weather-unit__text weather-unit__text--today">
                °C
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="weather-detail__text">
              Precipitation: {this.condition.precipitation}
            </div>
            <div className="weather-detail__text">
              Wind: <span id="wind-speed" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
