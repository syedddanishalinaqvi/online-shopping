import React, { useContext, useEffect, useState } from 'react'
import Context from './Context'
import Cartitem from './Cartitem.js'


export default function Cart({handleRemove,handleIncrease,handleDecrease}) {

  const [amount, setAmount] = useState(0);
  const cartItem = useContext(Context);

  const totalAmount = () => {
    var newAmount = 0;
    cartItem.map((element) => { return newAmount += (element.product*element.price) })
    setAmount(newAmount);
  }
  useEffect(() => {
    totalAmount();
  })
  return (
    <>
      {
        cartItem.map((element) => {
          return (<div key={element.id}><Cartitem cartItem={element} handleRemove={handleRemove} handleDecrease={handleDecrease} handleIncrease={handleIncrease} />
          </div>)
        })
      }
      <div style={{ fontSize: '18px', marginLeft: '40px' }}>Total Amount: {amount}</div>
    </>

  )
}
