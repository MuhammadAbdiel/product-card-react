import React, { Component } from "react";
import "./styles/ProductContent.css";

class ProductContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClick() {
    if (this.state.count === this.props.product.stocked) {
      this.setState({
        count: this.props.product.stocked,
      });
    } else {
      this.setState({
        count: this.state.count + 1,
      });
    }
  }

  handleClickReset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    const product = this.props.product;
    const imgUrl = "https://source.unsplash.com/1200x400?";

    return (
      <div className="card">
        <div className="card-image">
          <img src={imgUrl + product.name} alt="" />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{product.name}</p>
              <p className="subtitle is-6">{product.price}</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <button onClick={this.handleClick}>Add To Cart</button>
          {this.state.count === 0 ? (
            ""
          ) : (
            <div>
              <span className="badge">{this.state.count}</span>
              <span onClick={this.handleClickReset} className="badge-reset">
                Remove
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProductContent;
