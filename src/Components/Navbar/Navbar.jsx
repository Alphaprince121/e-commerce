import React, { useContext, useState } from 'react';
import '../Navbar/Navbar.css';
import logo from '../Assets/logo.png';
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { useRef } from 'react';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("shop") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Shop</Link>  {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/mens'>Men</Link>  {menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/womens'>Women</Link> {menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/kids'>kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>: <Link to='/Login'><button>Login</button></Link>}
                <Link to='/cart'><CiShoppingCart className='cart' /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar
