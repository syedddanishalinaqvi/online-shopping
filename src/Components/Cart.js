import React, { useContext, useEffect, useState } from 'react'
import Context from './Context'
import Cartitem from './Cartitem.js'


export default function Cart({handleRemove,handleIncrease,handleDecrease}) {

  const [amount, setAmount] = useState(0);
  const cartItem = useContext(Context);

  const totalAmount = () => {
    let newAmount = 0;
    cartItem.map((element) => { return newAmount += (element.product*element.price) })
    setAmount(newAmount.toFixed(2));
  }
  useEffect(() => {
    totalAmount();
  })
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <div style={{fontSize: '18px',padding:"40px"}}>{cartItem.length===0?<b>YOUR CART IS EMPTY 😢</b>:<b>Total Amount: ${amount}</b>}</div>
      {
        cartItem.map((element) => {
          return (<Cartitem key={element.id} cartItem={element} handleRemove={handleRemove} handleDecrease={handleDecrease} handleIncrease={handleIncrease} />)
        })
      }
  
    </div>

  )
}
