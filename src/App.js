import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

class App extends Component {
  state = {};

  static propTypes = {
    city: PropTypes.string.isRequired
  };

  static defaultProps = {
    city: "Lisbon",
    apiUrl: "https://api.openweathermap.org",
    apiKey: "029474316bb793be56fc4dee0d85fa00"
  };

  constructor(props) {
    super(props);

    this.refrehWeatherFromUrl(
      this.props.apiUrl +
        "/data/2.5/weather?" +
        "appid=" +
        this.props.apiKey +
        "&units=metric" +
        "&q=" +
        this.props.city
    );
  }

  /* let apiUrl = "https://api.openweathermap.org";
    let apiKey = "029474316bb793be56fc4dee0d85fa00";
    let apiParams = "appid=" + apiKey + "&units=metric";
    */

  /* axios
      .get(apiUrl + "/data/2.5/weather?" + apiParams + "&q=" + this.props.city)
      .then(response => {
        this.setState({
          condition: {
            city: response.data.name,
            description: response.data.weather[0].main,
            icon: response.data.weather[0].icon,
            precipitation: Math.round(response.data.main.humidity) + "%",
            temperature: Math.round(response.data.main.temp),
            time: this.friendlyDate(new Date()),
            wind: Math.round(response.data.wind.speed) + "km/h"
          }
        });
      });
  } */

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

  refrehWeatherFromUrl(url) {
    axios.get(url).then(response => {
      this.setState({
        condition: {
          city: response.data.name,
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

  refrehWeatherFromLatitudeAndLongitude(latitude, longitude) {
    this.refrehWeatherFromUrl(
      this.props.apiUrl +
        "/data/2.5/weather?" +
        "appid=" +
        this.props.apiKey +
        "&units=metric" +
        "&lat=" +
        latitude +
        "&lon=" +
        longitude
    );
  }

  curentLocation(event) {
    navigator.geolocation.getCurrentPosition(position => {
      this.refrehWeatherFromLatitudeAndLongitude(
        position.coords.latitude,
        position.coords.longitude
      );
    });
  }

  render() {
    if (this.state.condition) {
      return (
        <div className="weather-summary">
          <button onClick={event => this.currentLocation(event)}>
            Current Location
          </button>
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
                <WeatherIcon icon={this.state.condition.icon} />
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
              <WeatherIcon icon={this.state.condition.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.condition.temperature}
                </span>
              </div>
            </div>
            <div className="day__block">
              <div className="day__block-date">{this.state.condition.time}</div>
              <WeatherIcon icon={this.state.condition.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.condition.temperature}
                </span>
              </div>
            </div>
            <div className="day__block">
              <div className="day__block-date">{this.state.condition.time}</div>
              <WeatherIcon icon={this.state.condition.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.condition.temperature}
                </span>
              </div>
            </div>
            <div className="day__block">
              <div className="day__block-date">{this.state.condition.time}</div>
              <WeatherIcon icon={this.state.condition.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.condition.temperature}
                </span>
              </div>
            </div>
            <div className="day__block">
              <div className="day__block-date">{this.state.condition.time}</div>
              <WeatherIcon icon={this.state.condition.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.condition.temperature}
                </span>
              </div>
            </div>
            <div className="day__block">
              <div className="day__block-date">{this.state.condition.time}</div>
              <WeatherIcon icon={this.state.condition.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.condition.temperature}
                </span>
              </div>
            </div>
            <div className="day__block">
              <div className="day__block-date">{this.state.condition.time}</div>
              <WeatherIcon icon={this.state.condition.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.condition.temperature}
                </span>
              </div>
            </div>
            <div className="day__block">
              <div className="day__block-date">{this.state.condition.time}</div>
              <WeatherIcon icon={this.state.condition.icon} />
              <div className="day__block-temps">
                <span className="day__block-temp">
                  {this.state.condition.temperature}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          App is loading, <em>please wait...</em>
        </div>
      );
    }
  }
}

export default App;
