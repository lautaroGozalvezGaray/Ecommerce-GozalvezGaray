import React from "react";
import CartWidget from "../CartWidget";
import "./styles.css";
import cartlogo from "../../Assets/cartlogo.png"
import { Link } from "react-router-dom";
/* import { useContext } from "react";
import { Shop } from "../../contex/ShopContex"; */

const NavBar = () =>{

    /* const {estadoA} = useContext(Shop); */
    return(
        <div className="navContainer">
            <Link to={"/"}><img src={cartlogo} alt="logo" className="logo"></img></Link>
            <ul>
                
                <li><Link className="link" to={"/"}>Inicio</Link></li>
                <li><Link className="link" to={"/category/electronics"}>Electronics</Link></li>
                <li><Link className="link" to={"/category/jewelery"}>Jewelery</Link></li>
                <li><Link className="link" to={"/category/women's clothing"}>Women's clothing</Link></li>
                <li><Link className="link" to={"/category/men's clothing"}>Men's clothing</Link></li>
                <CartWidget/>
            </ul>
    
        </div>
        
    )
}

export default NavBar;