import "../Css/Middle.css"
import sale from "../Images/sale.jpg"
import saleBanner from "../Images/salebanner.jpg"

export default function Middle(){
    return(
        <div>
            <div className="carsoul">
                <img src={sale} alt="sale"/>
            </div>
            <div className="banner">
            <img src={saleBanner} alt="banner"/>
            </div>
        </div>
    )
}