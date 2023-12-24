import "../Css/Middle.css"
import sale from "../Images/sale.jpg"

export default function Middle(){
    return(
        <div>
            <div className="carsoul">
                <img src={sale} alt="sale" loading="lazy"/>
            </div>
        </div>
    )
}