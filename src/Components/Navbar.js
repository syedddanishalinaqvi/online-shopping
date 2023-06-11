import React from 'react'
import '../Css/Navbar.css'
import logo from '../Images/logo.png'
import user from '../Images/user.png'
import wishlist from '../Images/wishlist.png'
import cart from '../Images/cart.png'
import {Link} from 'react-router-dom';


export default function Navbar() {

  return (
    <div class="navbar">
      <img src={logo} class="logo" alt="/" />
      <div class="elements">
        <Link to="/">MEN</Link>
        <Link to="/">WOMEN</Link>
        <Link to="/">KIDS</Link>
        <Link to="/">HOME & LIVING</Link>
        <Link to="/">BEAUTY</Link>
      </div>
      <div className="right-navbar">
        <input type="text" class="search-bar" placeholder='Search for Products' />
        <div className="user">
          <a href="/" alt="/" className="profile">
            <img src={user} classsName="account" alt="account" />
            <figcaption>Profile</figcaption>
          </a>
          <a href="/" alt="/" className="wishlist">
            <img src={wishlist} classsName="account" alt="account" />
            <figcaption>WishList</figcaption>
          </a>
          <Link to="/cart" alt="/" className="cart">
            <img src={cart} classsName="account" alt="account" />
            <figcaption>Cart</figcaption>
          </Link>
        </div>
      </div>
    </div>
  )
}
