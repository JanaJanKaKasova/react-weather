import React, { Component } from "react";
import PropTypes from "prop-types";

class CurrentLocation extends Component {
  static propTypes = {
    refresh: PropTypes.func.isRequired
  };

  _click(event) {
    navigator.geolocation.getCurrentPosition(position => {
      this.props.refresh(position.coords.latitude, position.coords.longitude);
    });
  }

  render() {
    return (
      <button
        className="float-left btn btn-info"
        onClick={event => this._click(event)}
      >
        Current Location
      </button>
    );
  }
}

export default CurrentLocation;
