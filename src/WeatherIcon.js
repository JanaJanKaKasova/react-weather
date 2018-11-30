import React, { Component } from "react";

class WeatherIcon extends Component {
  render() {
    let url = "http://openweathermap.org/img/w/" + this.props.icon + ".png";
    console.log(url);
    return (
      <img
        className="weather__icon weather__icon--today"
        src={url}
        alt="weather icon"
      />
    );
  }
}

export default WeatherIcon;
