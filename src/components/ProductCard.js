import React from 'react';

const ProductCard = ({ product }) => {
    // Перевіряємо, чи продукт є об'єктом і має необхідні властивості
    if (!product || !product.image) {
        return <div>Завантаження...</div>; // Або повернути інший елемент, якщо дані ще не доступні
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
                Ціна: <span className="font-semibold">${product.price}</span>
            </p>
            <p>
                Матеріал: <span className="font-semibold">{product.material}</span>
            </p>
        </div>
    );
};

export default ProductCard;
