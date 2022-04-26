import React, { Component } from "react";
import ProductContent from "./ProductContent";
import "./styles/ProductCard.css";

class ProductCard extends Component {
  render() {
    const filterText = this.props.filterText;
    let rows = [];

    this.props.products.forEach((product) => {
      if (!product.name.toLowerCase().includes(filterText.toLowerCase())) {
        return;
      }
      rows.push(<ProductContent key={product.name} product={product} />);
    });

    return <div className="wrap">{rows}</div>;
  }
}

export default ProductCard;
