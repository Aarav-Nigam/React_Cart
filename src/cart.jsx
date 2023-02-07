import React, { useContext } from 'react';
import { CartContext } from './App';
import Total from './Total';
import CartList from './CartList';
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  return (

    <div className='Cart d-flex flex-column justify-content-center align-items-center '>
      <h1>Cart({cart.length})</h1>
      <CartList />
      <Total/>
    </div>
  );
};



export default Cart;
