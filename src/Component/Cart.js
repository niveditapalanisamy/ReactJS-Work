// src/components/Cart.js
import React from 'react';
import "./Card.css";
import"./Cart.css";
const Cart = ({ cart, removeFromCart,incrementQuantity, decrementQuantity }) => {
  return (
    <div className='container mt-5'>
      <h2>Shopping Cart</h2>
      <div className='d-flex flex-row flex-wrap'>
      
      <div className="cart">
        {cart.map((item) => (
          <div key={item.id} className="cart-item cardcont">
            <img className="cardimg" src={item.image} alt={item.title} />
            <h3 className='card-title text-center'>{item.title.substring(0,20)}</h3>
            <h1 className='m-4'>${item.price}</h1>
            <div className='quantity text-center'>
            <button className='btn btn-outline-danger mr-1' onClick={() => decrementQuantity(item.id)}>-</button>
              <span className='m-1'>{item.quantity}</span>
              <button className='btn btn-outline-success' onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
            <div className='text-center mt-4'>
            <button  className=" btn btn-outline-dark btn-lg text-center" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      </div> 
    </div>
  );
};

export default Cart;
