import React from 'react'
import '../Css/Navbar.css'
import logo from '../Images/logo.png'
import menu from '../Images/menu.png'
import wishlist from '../Images/wishlist.png'
import cart from '../Images/cart.png'
import { Link } from 'react-router-dom';



export default function Navbar({handleMenu}) {
  return (
    <div className="navbar">
      <div className="menu">
        <img onClick={handleMenu} style={{height:"35px",width:"35px"}} src={menu} alt="menu"/>
      </div>
      
      <Link to="/"><img src={logo} className="logo" alt="/" /></Link>
      <div className="elements">
        <Link to="/men"><p>MEN</p></Link>
        <Link to="/women"><p>WOMEN</p></Link>
        <Link to="/jewellery"><p>JEWELLERY</p></Link>
        <Link to="/electronics"><p>ELECTRONICS</p></Link>
      </div>
      <div className="right-navbar">
        <div className="user">
          <a href="/" alt="/" className="wishlist">
            <img src={wishlist} className="account" alt="account" />
          </a>
          <Link to="/cart" alt="/" className="cart">
            <img src={cart} className="account" alt="account" />
          </Link>
        </div>
      </div>
    </div>
  )
}
