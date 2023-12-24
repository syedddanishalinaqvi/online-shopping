import React from 'react'
import '../Css/Navbar.css'
import logo from '../Images/logo.png'
import wishlist from '../Images/wishlist.png'
import cart from '../Images/cart.png'
import {Link} from 'react-router-dom';


export default function Navbar() {

  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="/" />
      <div className="elements">
        <Link to="/"><p>MEN</p></Link>
        <Link to="/"><p>WOMEN</p></Link>
        <Link to="/"><p>JEWELLERY</p></Link>
        <Link to="/"><p>ELECTRONICS</p></Link>
      </div>
      <div className="right-navbar">
        <div className="user">
          <a href="/" alt="/" className="wishlist">
            <img src={wishlist} className="account" alt="account" />
            <figcaption>WishList</figcaption>
          </a>
          <Link to="/cart" alt="/" className="cart">
            <img src={cart} className="account" alt="account" />
            <figcaption>Cart</figcaption>
          </Link>
        </div>
      </div>
    </div>
  )
}
