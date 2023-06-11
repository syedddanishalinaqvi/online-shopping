import React, { useContext } from 'react'
import Context from './Context'
import Cartitem from './Cartitem.js'


export default function Cart() {
  const cartItem=useContext(Context);
  return (
    <div>
    {
          cartItem.map((element)=>{
            return( <div><Cartitem key={element.id} img={element.image} title={element.title.slice(0,12)} price={element.price}/>
            </div> )
          })
        }
        </div>
        )
}
