import {useEffect, useState } from "react";
import Items from "./Items";
function ItemList({handleCart}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(dat => setData(dat))
    }, []);
    return (
        <div style={{
            display: 'grid',
            margin: '20px',
            gridGap: '10px',
            grid: '430px / auto auto auto auto auto'
        }}>
            {
                data.map((element) => {
                    return <Items key={element.id} element={element} handleItem={handleCart} />
                })
            }

        </div>
    )
}
export default ItemList