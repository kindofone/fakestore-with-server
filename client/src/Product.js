import './Product.css';
import {useContext} from 'react';
import {CartContext} from './CartContext';

function Product({
  category,
  description,
  id,
  image,
  title,
  price,
  onAddToCart,
}) {
  const {addToCart} = useContext(CartContext);

  return (
    <div className="product">
      <img src={image} className="product-image" alt={title} />
      <h3 className="title">{title}</h3>
      {/* <p>{description}</p> */}
      <button onClick={() => addToCart(id)}>Add to Cart (${price})</button>
    </div>
  );
}

export default Product;
