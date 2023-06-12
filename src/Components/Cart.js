import React, { useContext, useEffect, useState } from 'react'
import Context from './Context'
import Cartitem from './Cartitem.js'


export default function Cart({removeElement}) {
  const[value,setValue]=useState(1);
  const[amount,setAmount]=useState(0);
  const cartItem=useContext(Context);
  const handleIncrease=(id)=>{
    for(let i=0;i<cartItem.length;i++){
      if(cartItem[i].id===id){
        console.log(cartItem[i].id+''+id)
          setValue(value+1);
        }
    }
  }
  const handleDecrease=(id)=>{
  setValue(value-1);
  }
  const totalAmount=()=>{
    var newAmount=0;
    cartItem.map((element)=>{return newAmount+=element.price})
    setAmount(newAmount);
  }
  useEffect(()=>{
    totalAmount();
  })
  return (
    <>
    {
          cartItem.map((element)=>{
            return( <div><Cartitem key={element.id} cartItem={element} handleRemove={removeElement} value={value} handleDecrease={handleDecrease} handleIncrease={handleIncrease} />
            </div> )
          })
        }
        <div style={{fontSize:'18px',marginLeft:'40px'}}>Total Amount: {amount}</div>
        </>

        )
}
