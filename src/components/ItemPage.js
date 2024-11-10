import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: "Різдвяна", price: 1500, image: "https://cdn.27.ua/sc--media--prod/default/88/85/84/88858439-d2d7-4710-ab37-db8f343ba4dd.jpg", height: 180, manufacturer: "EcoTree", material: "Plastic" },
  { id: 2, name: "Новорічна", price: 1200, image: "https://auau.com.ua/wp-content/uploads/2023/11/yalbyra-3n-na-krabakh-1.jpg", height: 210, manufacturer: "EcoTree", material: "Plastic" },
  { id: 3, name: "Зелена", price: 1300, image: "https://nashayalunka.com/upload/catalog/200/174/elitgreen.jpg", height: 200, manufacturer: "EcoTree", material: "Wood" }
];

const ItemPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

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
          <button className="add-to-cart-button">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
