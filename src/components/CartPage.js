import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <span>{item.name}</span>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => dispatch(removeItem(item.id))}>-</button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button onClick={() => dispatch(addItem(item))}>+</button>
              </div>
              <div className="cart-item-price">${item.price * item.quantity}</div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="cart-summary">
        <p className="total-amount">Total Amount: ${totalAmount}</p>
        <div className="cart-summary-buttons">
          <Link to="/catalog" className="back-to-catalog">
            Back to Catalog
          </Link>
          <button disabled={!items.length}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;