import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ProductContext } from './ProductContext';
import { addItem } from '../redux/cartSlice';

const ItemPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const productDetails = {
    name: product.name,
    price: `${product.price} грн`,
    image: product.image,
    height: product.height,
    manufacturer: product.manufacturer,
    material: product.material,
    description: "This Christmas tree is an environmentally friendly product that gives a natural look to your holiday decor. Made of quality materials for long-term use.",
  };

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
  };

  return (
    <div className="item-page">
      <div className="product-content">
        <div className="product-image-container">
          <img src={productDetails.image} alt={productDetails.name} className="product-image" />
        </div>
        <div className="product-info">
          <div className="product-details-row">
            <span className="product-detail">{productDetails.height} см</span>
            <span className="product-detail">{productDetails.manufacturer}</span>
            <span className="product-detail">{productDetails.material}</span>
          </div>
          <h2 className="product-name">{productDetails.name}</h2>
          <p className="product-description">{productDetails.description}</p>
        </div>
      </div>
      <div className="product-footer">
        <p className="product-price">{productDetails.price}</p>
        <div className="button-group">
          <button className="back-button" onClick={() => navigate(-1)}>Go back</button>
          <button className="add-to-cart-button" onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
