export default function Cartitem({cartItem,handleRemove}){
    const {id,image,title,price}=cartItem;
    return(
        <div style={{border:'1px',borderStyle:'solid',margin:'30px',padding:'10px',display:'inline-block',height:'150px',width:'800px'}}>
            <img src={image} alt="items" style={{height:"120px",width:'300px'}}/>
            <div className="detail" style={{margin:'2px',float:'right'}}>
                <h3>{title.slice(0,20)}</h3>
                <h4>{price}</h4>
                <button onClick={(e)=>{handleRemove(e,id)}}>Remove</button>
            </div>
        </div>
    )
}