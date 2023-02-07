import React, { useContext } from 'react';
import { CartContext } from './App';

const CartList = () => {
    const { cart, setCart } = useContext(CartContext);
    const removeItem=(id)=>{
      let temp=[]
      for(let i of cart){
        if(i.id!=id){
          temp.push(i);
        }
      }
      setCart(temp);
    }
    const incItem=(id)=>{
      let temp=[]
      for(let i of cart){
        if(i.id==id){
          temp.push({...i,amount:i.amount+1})
        }
        else temp.push(i);
      }
      setCart(temp);
    }
    const decItem=(id)=>{
      let temp=[]
      for(let i of cart){
        if(i.id==id){
          if(i.amount>1)
          temp.push({...i,amount:i.amount-1})
        }
        else temp.push(i);
      }
      setCart(temp);
    }
    return (
      <div className='d-flex flex-column'>
        <ul>
          {cart.map((item, index) => (
            <div className='card d-flex flex-row justify-content-between'>
              <div className='card-details d-flex flex-row'>
                <img src={item.img} width={"15%"} />
                <div className='card-title'>
                  <h2>{item.title}</h2>
                  <h4 className='fst-italic'>${item.price}</h4>
                  <button className='btn btn-danger' onClick={()=>{removeItem(item.id)}}>Remove</button>
                </div>
              </div>
              <div className='item-amount d-flex flex-column justify-content-center align-items-center m-2'>
                <button onClick={()=>{incItem(item.id)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                  </svg>
                </button>
                <h4>{item.amount}</h4>
                <button onClick={()=>{decItem(item.id)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
  
    );
  };
  export default CartList;