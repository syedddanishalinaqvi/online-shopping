import '../Css/CartItem.css' 

export default function Cartitem({cartItem,handleRemove,handleDecrease,handleIncrease}){
    const {id,image,product,title,price}=cartItem;
    return(
        <div className='cart-item'>
            <img src={image} alt="items" style={{height:"180px",width:'300px'}}/>
            <div className="detail" style={{textAlign:"center"}}>
                <h3>{title.slice(0,20)}</h3>
                <h4>Price: ${price.toFixed(2)}</h4>
                <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around", alignItems:"center" }}>
                    <button onClick={()=>{handleDecrease(id)}} style={{backgroundColor:"white",border:"1px solid",height:"30px",width:"30px",cursor:"pointer"}}>-</button>
                    <h3 style={{fontSize:'15px'}}>{product}</h3>
                    <button onClick={()=>{handleIncrease(id)}} style={{backgroundColor:"white",border:"1px solid",height:"30px",width:"30px",cursor:"pointer"}} >+</button>
                </div>
                <div>
                <button onClick={(e)=>{handleRemove(e,id)}}>Remove</button>
                </div>
            </div>
        </div>
    )
}