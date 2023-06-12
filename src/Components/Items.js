

export default function Items({element,handleItem}){
    const {image,title,description,price}=element;
    return(
        <div style={{border:'1px',borderStyle:'solid',height:'430px',width:'300px'}}>
            <img src={image} alt="items" style={{height:"230px",width:'300px'}}/>
            <div className="detail" style={{margin:'2px'}}>
                <h3>{title.slice(0,20)}</h3>
                <h7>{description.slice(0,40)}</h7>
                <h4>${price}</h4>
            </div>
            <div>
                <button style={{fontSize:'16px',height:'25px'}} href='/' alt='/' onClick={(e)=>{handleItem(e,element)}}>ADD to Cart</button>
            </div>
        </div>
    )
}