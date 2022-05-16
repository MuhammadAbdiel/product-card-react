import ProductContent from "./ProductContent";
import "./styles/ProductCard.css";

const ProductCard = (props) => {
  const filterText = props.filterText;
  let rows = [];

  props.products.forEach((product) => {
    if (!product.name.toLowerCase().includes(filterText.toLowerCase())) {
      return;
    }
    rows.push(<ProductContent key={product.name} product={product} />);
  });

  return <div className="wrap">{rows}</div>;
};

export default ProductCard;
