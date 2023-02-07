import React, { useContext } from 'react';
import { CartContext } from './App';
function Total(){
    const { cart, setCart } = useContext(CartContext);
    const clearCart=()=>{
        setCart([])
    }
    var total=0;
    for(let i in cart){
        total+=cart[i].price*cart[i].amount;
    }
    return(
    <>
    <hr className="w-75" />
    <div className="w-75 d-flex justify-content-between">
        <h3>Total</h3>
        <h4>${total}</h4>
    </div>
    <hr className="w-75" />
    <button className='w-50 btn btn-danger' onClick={()=>{clearCart()}}>Clear Cart</button>
    </>

    )
}
export default Total;