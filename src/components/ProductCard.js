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
        Height: <span className="font-semibold">{product.height}</span> cm
      </p>
      <p>
        Manufacturer: <span className="font-semibold">{product.manufacturer}</span>
      </p>
      <p>
        Price: <span className="font-semibold">{product.price} ₴</span>
      </p>
      <p>
        Material: <span className="font-semibold">{product.material}</span>
      </p>

      <Link
        to={`/item/${product.id}`}
        className="view-more-button"
      >
        View More
      </Link>
    </div>
  );
};

export default ProductCard;
