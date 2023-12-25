import React from 'react'
import Items from './Items'
import Data from './Data'

const Men = ({handleCart}) => {
    const menData=Data.filter(item=>item.category==="men's clothing");
  return (
    <div>
            <h1 style={{textAlign:"center",fontSize:"40px",letterSpacing:"4px"}}>MEN's CLOTHINGS</h1>
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>
            {
                menData.map((element) => {
                    return <Items key={element.id} element={element} handleItem={handleCart} />
                })
            }
        </div>
        </div>
  )
}

export default Men
