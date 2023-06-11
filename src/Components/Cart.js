import React, { useContext } from 'react'
import Context from './Context'
import Cartitem from './Cartitem.js'


export default function Cart({removeElement}) {
  const cartItem=useContext(Context);
  return (
    <div>
    {
          cartItem.map((element)=>{
            return( <div><Cartitem key={element.id} cartItem={element} handleRemove={removeElement}/>
            </div> )
          })
        }
        </div>
        )
}
