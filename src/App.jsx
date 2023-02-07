import React, { useState, createContext} from 'react';
import Cart from './cart'
import Navbar from './Navbar'
import data from './data';
import './App.css'
export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState(data);
  return (<>
  <CartContext.Provider value={{ cart, setCart }}>
  <Navbar/>
  <Cart/>
  </CartContext.Provider>
  </>
  )
}

export default App
