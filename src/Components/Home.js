
import ItemList from "./ItemList";
import Middle from "./Middle";

export default function Home({handleCart}) {

    return (
        
        <div>
            <Middle />
            <ItemList handleCart={handleCart}/>
        </div>
    )
} 