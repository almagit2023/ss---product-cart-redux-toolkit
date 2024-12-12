import React, { useState, useEffect } from 'react';
// import { productsList } from '../products/products';
import { useDispatch } from 'react-redux';
import { addProduct } from '../reducers/reducers';
import { handleSuccess } from '../util';
import axios from 'axios';


const Home = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();


  const getData = async () => {
    try {
      const { data } = await axios.get('https://dummyjson.com/products');
      const products = data.products;
      console.log("Products:", products);
      return products;
    }

    catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getData();
      setProduct(productsData); // Set the state here
    };

    fetchProducts();
  }, []);


  const addToCart = (product) => {
    dispatch(addProduct(product));
    handleSuccess("Product added to cart!");
  };

  return (
    <div className='productBox'>
      {product.map((item) => (
        <div key={item.id} className='productStyle'>
          <img src={item.images[0]} alt={item.title} width='33%' />
          <h3>{item.title}</h3>
          <p style={{ textAlign: "justify" }}>{item.description}</p>
          <p style={{ margin: "1rem", fontWeight: '900' }}>
            <span style={{ color: "green" }}>Price :</span> ${item.price}
          </p>
          <button
            className='addCartButton'
            onClick={() => addToCart(item)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
