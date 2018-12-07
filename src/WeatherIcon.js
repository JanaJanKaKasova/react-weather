import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactAnimatedWeather from "react-animated-weather";

class WeatherIcon extends Component {
  static propTypes = {
    iconName: PropTypes.string.isRequired
  };

  iconMap = {
    "01n": "CLEAR_NIGHT",
    "01d": "CLEAR_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "03n": "CLOUDY",
    "03d": "CLOUDY",
    "04n": "CLOUDY",
    "04d": "CLOUDY",
    "09n": "SLEET",
    "09d": "SLEET",
    "10n": "RAIN",
    "10d": "RAIN",
    "11n": "SLEET",
    "11d": "SLEET",
    "13n": "SNOW",
    "13d": "SNOW",
    "50n": "FOG",
    "50d": "FOG"
  };

  render() {
    /* let imgSrc =
      "http://openweathermap.org/img/w/" + this.props.iconName + ".png"; */
    return (
      <ReactAnimatedWeather
        icon={this.iconMap[this.props.iconName]}
        color="pink"
        size={70}
        animate={true}
      />
      /*<img
        className="weather__icon weather__icon--today"
        alt="weather icon"
        src={imgSrc}
      /> */
    );
  }
}

export default WeatherIcon;
