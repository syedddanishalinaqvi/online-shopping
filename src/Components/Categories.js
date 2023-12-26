import React from 'react'
import Items from './Items'

const Categories = ({handleCart,data}) => {
  return (
    <div>
            <h1 style={{textAlign:"center",fontSize:"40px",letterSpacing:"4px"}}>{data[0].category.toUpperCase()}</h1>
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>
            {
                data.map((element) => {
                    return <Items key={element.id} element={element} handleItem={handleCart} />
                })
            }
        </div>
        </div>
  )
}

export default Categories
