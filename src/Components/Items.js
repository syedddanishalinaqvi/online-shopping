

export default function Items({element,handleItem}){
    const {id,image,title,desc,price}=element;
    return(
        <div style={{border:'1px',borderStyle:'solid',height:'430px',width:'300px'}}>
            <img src={image} alt="items" style={{height:"230px",width:'300px'}}/>
            <div className="detail" style={{margin:'2px'}}>
                <h3>{title}</h3>
                <h7>{desc}</h7>
                <h4>{price}</h4>
            </div>
            <div>
                <a href='/' alt='/' onClick={(e)=>{handleItem(e,element)}}>ADD to Cart</a>
            </div>
        </div>
    )
}