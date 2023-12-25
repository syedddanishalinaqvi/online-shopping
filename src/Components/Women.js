import React from 'react'
import Data from './Data';
import Items from './Items';

const Women = ({handleCart}) => {
    const menData=Data.filter(item=>item.category==="women's clothing");
    return (
      <div>
              <h1 style={{textAlign:"center",fontSize:"40px",letterSpacing:"4px"}}>WOMEN's CLOTHINGS</h1>
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

export default Women
