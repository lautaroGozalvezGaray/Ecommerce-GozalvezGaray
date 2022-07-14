import React from "react";
import CartWidget from "../CartWidget";
import "./styles.css";
import logo2 from "../../Assets/logo2.png"
import { Link } from "react-router-dom";
/* import { useContext } from "react";
import { Shop } from "../../contex/ShopContex"; */

const NavBar = () =>{

    /* const {estadoA} = useContext(Shop); */
    return(
        <div className="navContainer">
            <Link to={"/"}><img src={logo2} alt="logo" className="logo"></img></Link>
            <p className="titleEcommerce">Full Tecnology</p>
            <ul>
                
                <li><Link className="link" to={"/"}>Inicio</Link></li>
                <li><Link className="link" to={"/category/celulares"}>Celulares</Link></li>
                <li><Link className="link" to={"/category/notebooks"}>Notebooks</Link></li>
                <li><Link className="link" to={"/category/tablets"}>Tablets</Link></li>
                <li><Link className="link" to={"/category/smartwatch"}>Smartwatches</Link></li>
                <CartWidget/>
            </ul>
    
        </div>
        
    )
}

export default NavBar;