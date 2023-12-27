import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/MenuLeft.css'

const MenuLeft = ({menubar}) => {
  return (
    <div className="menu-left" style={{position:"fixed",height:"100%",width:"50%",top:"0",left:menubar,zIndex:"3",backgroundColor:"white"}}>
        <div style={{color:"Black",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"200px"}} className="menu-wrapper-content">
        <Link to="/men"><p>MEN</p></Link>
        <Link to="/women"><p>WOMEN</p></Link>
        <Link to="/jewellery"><p>JEWELLERY</p></Link>
        <Link to="/electronics"><p>ELECTRONICS</p></Link>
        </div>
      </div>
  )
}

export default MenuLeft
