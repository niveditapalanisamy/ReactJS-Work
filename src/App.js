// src/App.js
import React, { useState } from 'react';
import ProductList from './Component/ProductList';
import Cart from './Component/Cart';

function App() {
  const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  //   console.log("add to cart",product);
  // };

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };


  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    console.log("updated cart",updatedCart);
    setCart(updatedCart);
  };

  return (

    <div className="App">
      <header className="App-header">
        <h1 className='text-center m-5'>E-Commerce Website</h1>
      </header>
      <main>
        <ProductList addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart}  incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity} />
      </main>
    </div>
  );
}

export default App;
