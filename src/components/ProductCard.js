import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    if (!product || !product.image || !product.name || !product.price) {
        return <div>...</div>;
      }      

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <h2 className="product-name">{product.name}</h2>
      <p>
        Висота: <span className="font-semibold">{product.height}</span> см
      </p>
      <p>
        Виробник: <span className="font-semibold">{product.manufacturer}</span>
      </p>
      <p>
        Ціна: <span className="font-semibold">{product.price} грн</span>
      </p>
      <p>
        Матеріал: <span className="font-semibold">{product.material}</span>
      </p>

      <Link
        to={`/item/${product.name}/${product.price}/${product.height}/${product.manufacturer}/${product.material}/${encodeURIComponent(product.image)}`}
        className="view-more-button"
      >
        View More
      </Link>
    </div>
  );
};

export default ProductCard;
