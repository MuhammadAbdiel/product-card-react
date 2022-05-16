import React, { Component } from "react";
import CardList from "./CardList";
import ProductCard from "./ProductCard";
import SearchInput from "./SearchInput";
import "./styles/Container.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filterText) {
    this.setState({
      filterText,
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Shopping Cart</h1>
        <hr />
        <SearchInput
          filterText={this.state.filterText}
          onFilterChange={this.handleChange}
        />
        <h2>List Products</h2>
        <CardList>
          <ProductCard
            products={this.props.products}
            filterText={this.state.filterText}
          />
        </CardList>
        <hr className="footer" />
        <footer>&copy; Copyright 2022 | All Right Reserved.</footer>
      </div>
    );
  }
}

export default Container;
