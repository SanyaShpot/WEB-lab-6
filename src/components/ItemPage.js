import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ItemPage = () => {
    const { productName, price, height, manufacturer, material, image} = useParams();
    const navigate = useNavigate();

    const productDetails = {
        name: productName,
        price: `${price} грн`,
        image: image,
        height: height,
        manufacturer: manufacturer,
        material: material,
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
