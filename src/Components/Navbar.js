import React from 'react'
import '../Css/Navbar.css'
import logo from '../Images/logo.png'
import user from '../Images/user.png'
import wishlist from '../Images/wishlist.png'
import cart from '../Images/cart.png'
import {Link} from 'react-router-dom';


export default function Navbar() {

  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="/" />
      <div className="elements">
        <Link to="/">MEN</Link>
        <Link to="/">WOMEN</Link>
        <Link to="/">JEWELLERY</Link>
        <Link to="/">ELECTRONICS</Link>
      </div>
      <div className="right-navbar">
        <input type="text" className="search-bar" placeholder='Search for Products' />
        <div className="user">
          <a href="/" alt="/" className="profile">
            <img src={user} className="account" alt="account" />
            <figcaption>Profile</figcaption>
          </a>
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
