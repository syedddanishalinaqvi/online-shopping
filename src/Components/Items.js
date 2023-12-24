import wishlist from '../Images/wishlist.png'
import '../Css/Items.css'

export default function Items({element,handleItem}){
    const {id,image,title,description,price}=element;
    return(
        <div style={{position:"relative",height:'450px',width:'300px',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src={image} alt="items" style={{height:"250px",width:'300px'}}/>
            <div className="detail" style={{textAlign:"center"}}>
                <h3>{title.slice(0,20)}</h3>
                <p>{description.slice(0,40)}</p>
                <h4>${price}</h4>
            </div>
            <div styles={{}}>
                <button className='add-to-cart' onClick={(e)=>{handleItem(e,element,id)}}>ADD to Cart</button>
            </div>
            <button className="heart"><img style={{height:"30px",width:"30px"}} src={wishlist} alt={wishlist}/></button>
        </div>
    )
}