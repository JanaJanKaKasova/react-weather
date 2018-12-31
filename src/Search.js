import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  _handleChange(event) {
    this.setState({ value: event.target.value });
  }

  _submit(event) {
    event.preventDefault();
    this.props.refresh(this.state.value);
  }

  render() {
    return (
      <div>
        <form className="float-left" onSubmit={event => this._submit(event)}>
          <input
            type="text"
            placeholder="Enter a City"
            autoFocus="on"
            autoComplete="off"
            onChange={event => this._handleChange(event)}
            value={this.state.value}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-secondary ml-2 pl-4 pr-4"
          />
        </form>
      </div>
    );
  }
}

export default Search;
