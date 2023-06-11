export default function Cartitem(props){
    return(
        <div style={{border:'1px',borderStyle:'solid',margin:'30px',padding:'10px',display:'inline-block',height:'150px',width:'800px'}}>
            <img src={props.img} alt="items" style={{height:"120px",width:'300px'}}/>
            <div className="detail" style={{margin:'2px',float:'right'}}>
                <h3>{props.title}</h3>
                <h4>{props.price}</h4>
            </div>
        </div>
    )
}