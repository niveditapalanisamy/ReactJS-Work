// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Card.css";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
     
      <div className='container'>
      <div className="product-list d-flex flex-row flex-wrap">
      

        {products.map((product) => (
            
          <div key={product.id} className="product cardcontainer">
            <img  className="cardimage" src={product.image} alt={product.title} />
            <h3 className='card-title text-center'>{product.title.substring(0,20)}</h3>
            <h1 className='m-4'>${product.price}</h1>
            <div className='text-center'>
            <button className="btn btn-outline-dark btn-lg text-center" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
        
      </div>
      </div>
    </div>
  );
};

export default ProductList;

