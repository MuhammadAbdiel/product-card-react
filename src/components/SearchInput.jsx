import React, { Component } from "react";
import "./styles/SearchInput.css";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onFilterChange(event.target.value);
  }

  render() {
    return (
      <form>
        <input
          className="search"
          type="text"
          onChange={this.handleChange}
          value={this.props.filterText}
        />
      </form>
    );
  }
}

export default SearchInput;
