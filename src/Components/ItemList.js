import Items from "./Items";
import Data from './Data.js'
function ItemList({handleCart}) {
    return (
        <div>
            <h1 style={{textAlign:"center",fontSize:"40px",letterSpacing:"4px"}}>ALL ITEMS</h1>
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>
            {
                Data.map((element) => {
                    return <Items key={element.id} element={element} handleItem={handleCart} />
                })
            }
        </div>
        </div>
    )
}
export default ItemList