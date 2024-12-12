import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementProduct, decrementProduct, removeProduct } from '../reducers/reducers';
import { handleError } from '../util';

import { BsFillBasketFill } from "react-icons/bs";



const Cart = () => {
  // const productCount = useSelector((state) => state.products.count);
  const cartItems = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementProduct({ id }))
  }

  const handleDecrement = (id) => {
    dispatch(decrementProduct({ id }))
  }

  const handleRemove = (id) => {
    dispatch(removeProduct({ id }))
    handleError("Product removed from the cart...")
  }

  return (
    <div>

      {cartItems.length > 0 ? (
        <div>
          <h2>Your Cart</h2>
          <table className="cartTable">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => handleDecrement(item.id)} style={{ background: 'orangered' }}> - </button>
                    {item.count}
                    <button onClick={() => handleIncrement(item.id)} style={{ background: 'green' }}> + </button>
                  </td>
                  <td>${(item.price * item.count).toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleRemove(item.id)} style={{ background: 'red' }}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) :
        (
          <div className='emptyBasket'>
            <p style={{ color: 'lightgray' }}>Your cart is Empty</p>
            <BsFillBasketFill style={{ fontSize: '72px', color: 'lightgray' }} />
          </div>
        )}
    </div>
  );
};

export default Cart;
