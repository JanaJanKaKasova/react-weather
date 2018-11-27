import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    //this.state
    this.state = {
      condition: {
        city: "Lisbon",
        description: "Clouds",
        imgUrl: "http://openweathermap.org/img/w/02d.png",
        precipitation: "62%",
        temperature: 12,
        time: "Thu 15:09",
        wind: "4 km/h"
      }
    };
  }

  render() {
    return (
      <div className="weather-summary">
        <div className="weather-summary-header">
          <h1>{this.state.condition.city}</h1>
          <div className="weather-detail__text">
            {this.state.condition.time}
          </div>
          <div className="weather-detail__text">
            {this.state.condition.description}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="clearfix">
              <img
                className="weather__icon weather__icon--today"
                alt="weather icon"
                src={this.state.condition.imgUrl}
              />
              <div className="weather-temp weather-temp--today">
                {this.state.condition.temperature}
              </div>
              <div className="weather-unit__text weather-unit__text--today">
                °C
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="weather-detail__text">
              Precipitation: {this.state.condition.precipitation}
            </div>
            <div className="weather-detail__text">
              Wind: {this.state.condition.wind}
            </div>
          </div>
        </div>

        <div className="days clearfix">
          <div className="day__block">
            <div className="day__block-date">{this.state.condition.time}</div>
            <img
              className="day__block-image"
              alt="weather icon"
              src={this.state.condition.imgUrl}
            />
            <div className="day__block-temps">
              <span className="day__block-temp">
                {this.state.condition.temperature}
              </span>
            </div>
          </div>
          <div className="day__block">
            <div className="day__block-date">{this.state.condition.time}</div>
            <img
              className="day__block-image"
              alt="weather icon"
              src={this.state.condition.imgUrl}
            />
            <div className="day__block-temps">
              <span className="day__block-temp">
                {this.state.condition.temperature}
              </span>
            </div>
          </div>
          <div className="day__block">
            <div className="day__block-date">{this.state.condition.time}</div>
            <img
              className="day__block-image"
              alt="weather icon"
              src={this.state.condition.imgUrl}
            />
            <div className="day__block-temps">
              <span className="day__block-temp">
                {this.state.condition.temperature}
              </span>
            </div>
          </div>
          <div className="day__block">
            <div className="day__block-date">{this.state.condition.time}</div>
            <img
              className="day__block-image"
              alt="weather icon"
              src={this.state.condition.imgUrl}
            />
            <div className="day__block-temps">
              <span className="day__block-temp">
                {this.state.condition.temperature}
              </span>
            </div>
          </div>
          <div className="day__block">
            <div className="day__block-date">{this.state.condition.time}</div>
            <img
              className="day__block-image"
              alt="weather icon"
              src={this.state.condition.imgUrl}
            />
            <div className="day__block-temps">
              <span className="day__block-temp">
                {this.state.condition.temperature}
              </span>
            </div>
          </div>
          <div className="day__block">
            <div className="day__block-date">{this.state.condition.time}</div>
            <img
              className="day__block-image"
              alt="weather icon"
              src={this.state.condition.imgUrl}
            />
            <div className="day__block-temps">
              <span className="day__block-temp">
                {this.state.condition.temperature}
              </span>
            </div>
          </div>
          <div className="day__block">
            <div className="day__block-date">{this.state.condition.time}</div>
            <img
              className="day__block-image"
              alt="weather icon"
              src={this.state.condition.imgUrl}
            />
            <div className="day__block-temps">
              <span className="day__block-temp">
                {this.state.condition.temperature}
              </span>
            </div>
          </div>
          <div className="day__block">
            <div className="day__block-date">{this.state.condition.time}</div>
            <img
              className="day__block-image"
              alt="weather icon"
              src={this.state.condition.imgUrl}
            />
            <div className="day__block-temps">
              <span className="day__block-temp">
                {this.state.condition.temperature}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
