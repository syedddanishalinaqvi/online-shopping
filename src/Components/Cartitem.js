export default function Cartitem({value,cartItem,handleRemove,handleDecrease,handleIncrease}){
    const {id,image,title,price}=cartItem;
    return(
        <div style={{border:'1px',borderStyle:'solid',margin:'30px',padding:'10px',display:'inline-block',height:'180px',width:'800px'}}>
            <img src={image} alt="items" style={{height:"120px",width:'300px'}}/>
            <div className="detail" style={{margin:'2px',float:'right'}}>
                <h3>{title.slice(0,20)}</h3>
                <h4>${price}</h4>
                <div style={{display:"flex" }}>
                    <button onClick={()=>{handleDecrease(id)}} style={{height:'20px'}}>-</button>
                    <h3 style={{marginTop:0,fontSize:'15px'}}>{value}</h3>
                    <button onClick={()=>{handleIncrease(id)}} style={{float:'right', height:'20px'}} >+</button>
                </div>
                <div>
                <button onClick={(e)=>{handleRemove(e,id)}}>Remove</button>
                </div>
            </div>
        </div>
    )
}