import Items from "./Items";
import Data from './Data.js'
function ItemList({handleCart}) {
    return (
        <div style={{
            display: 'grid',
            margin: '20px',
            gridGap: '10px',
            grid: '430px / auto auto auto auto auto'
        }}>
            {
                Data.map((element) => {
                    return <Items key={element.id} element={element} handleItem={handleCart} />
                })
            }

        </div>
    )
}
export default ItemList