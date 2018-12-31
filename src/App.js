import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./App.css";
import WeatherIcon from "./WeatherIcon";
import CurrentLocation from "./CurrentLocation";
import Search from "./Search";
import Forecast from "./Forecast";
import Api from "./Api";

export default class App extends Component {
  static propTypes = {
    city: PropTypes.string.isRequired
  };

  state = {
    city: this.props.city
  };

  componentWillMount() {
    this.refresh(this.state.city);
  }

  friendlyDate(date) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;

    return days[date.getDay()] + " " + date.getHours() + ":" + minutes;
  }

  refreshWeatherFromParams(params) {
    let url = `${Api.url}/data/2.5/weather?appid=${
      Api.key
    }&units=metric&${params}`;
    axios.get(url).then(response => {
      this.setState({
        city: response.data.name,
        weather: {
          description: response.data.weather[0].main,
          icon: response.data.weather[0].icon,
          precipitation: Math.round(response.data.main.humidity) + "%",
          temperature: Math.round(response.data.main.temp),
          time: this.friendlyDate(new Date()),
          wind: Math.round(response.data.wind.speed) + "km/h"
        }
      });
    });
  }

  refreshWeatherFromLatitudeAndLongitude = (latitude, longitude) => {
    this.refreshWeatherFromParams(`lat=${latitude}&lon=${longitude}`);
  };

  refresh = city => {
    this.refreshWeatherFromParams(`q=${city}`);
  };

  render() {
    if (this.state.weather) {
      return (
        <div>
          <div className="clearfix">
            <Search refresh={this.refresh} />
            <CurrentLocation
              refresh={this.refreshWeatherFromLatitudeAndLongitude}
            />
          </div>
          <br />
          <div className="weather-summary">
            <div className="weather-summary-header">
              <h1>{this.state.city}</h1>
              <div className="weather-detail__text">
                {this.state.weather.time}
              </div>
              <div className="weather-detail__text">
                {this.state.weather.description}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="clearfix">
                  <div className="float-left weather-icon">
                    <WeatherIcon iconName={this.state.weather.icon} />
                  </div>
                  <div className="weather-temp weather-temp--today">
                    {this.state.weather.temperature}
                  </div>
                  <div className="weather-unit__text weather-unit__text--today">
                    °C
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="weather-detail__text">
                  Precipitation: {this.state.weather.precipitation}
                </div>
                <div className="weather-detail__text">
                  Wind: {this.state.weather.wind}
                </div>
              </div>
            </div>
          </div>
          <Forecast city={this.state.city} />

          {/* <div className="days clearfix">
            <div className="day__block">
              <div className="day__block-date">
                {this.state.conditions.time}
              </div>
              <WeatherIcon iconName={this.state.conditions.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.conditions.temperature}
                </span>
              </div>
            </div>
            <div className="day__block">
              <div className="day__block-date">
                {this.state.conditions.time}
              </div>
              <WeatherIcon iconName={this.state.conditions.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.conditions.temperature}
                </span>
              </div>
            </div>
            <div className="day__block">
              <div className="day__block-date">
                {this.state.conditions.time}
              </div>
              <WeatherIcon iconName={this.state.conditions.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.conditions.temperature}
                </span>
              </div>
            </div>
            <div className="day__block">
              <div className="day__block-date">
                {this.state.conditions.time}
              </div>
              <WeatherIcon iconName={this.state.conditions.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.conditions.temperature}
                </span>
              </div>
            </div>
            <div className="day__block">
              <div className="day__block-date">
                {this.state.conditions.time}
              </div>
              <WeatherIcon iconName={this.state.conditions.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.conditions.temperature}
                </span>
              </div>
            </div>
            <div className="day__block">
              <div className="day__block-date">
                {this.state.conditions.time}
              </div>
              <WeatherIcon iconName={this.state.conditions.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.conditions.temperature}
                </span>
              </div>
            </div>
            <div className="day__block">
              <div className="day__block-date">
                {this.state.conditions.time}
              </div>
              <WeatherIcon iconName={this.state.conditions.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.conditions.temperature}
                </span>
              </div>
            </div>
            <div className="day__block">
              <div className="day__block-date">
                {this.state.conditions.time}
              </div>
              <WeatherIcon iconName={this.state.conditions.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.conditions.temperature}
                </span>
              </div>
            </div>
          </div>*/}
        </div>
      );
    } else {
      return <div>App is loading, please wait...</div>;
    }
  }
}
