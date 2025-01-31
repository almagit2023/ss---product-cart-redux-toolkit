import React, { useState, useEffect } from 'react';
// import { productsList } from '../products/products';
import { useDispatch } from 'react-redux';
import { addProduct } from '../reducers/reducers';
import { handleSuccess } from '../util';
import { fetchDataFromAPI } from '../api/api';


const Home = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await fetchDataFromAPI('https://dummyjson.com/products');
        setProduct(result.products); // Update state with fetched products
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    // fetching data...
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
