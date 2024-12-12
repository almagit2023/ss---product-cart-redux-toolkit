import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  // Get the cart items from Redux store
  const cartItems = useSelector((state) => state.products.items);

  // Calculate the total count of products in the cart
  const productCount = cartItems.reduce((total, item) => total + item.count, 0);

  return (
    <div className='navBarStyle'>
      <Link className='linkStyle' to="/home">Home</Link>
      <Link className='linkStyle' to="/cart">
        Cart
        {productCount > 0 && (
          <sup className='notificationBadge'>
            {productCount}
          </sup>
        )}
      </Link>
    </div>
  );
};

export default NavBar;
