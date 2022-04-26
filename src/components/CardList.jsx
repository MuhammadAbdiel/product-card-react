import React, { Component } from "react";
import ProductCard from "./ProductCard";
import "./styles/CardList.css";

class CardList extends Component {
  render() {
    return (
      <div className="box">
        <ProductCard
          products={this.props.products}
          filterText={this.props.filterText}
        />
      </div>
    );
  }
}

export default CardList;
