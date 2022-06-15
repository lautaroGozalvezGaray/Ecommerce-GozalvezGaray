import React from "react";
import CartWidget from "../CartWidget";
import "./styles.css";
import logoEnContruccion from "../../Assets/logoEnContruccion.png"

const NavBar = () =>{
    return(
        <div className="navContainer">
            <img src={logoEnContruccion} alt="logo" className="logo"></img>
            <ul>
                
                <li><a className="active" href="#inicio">Inicio</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <CartWidget/>
            </ul>
    
        </div>
        
    )
}

export default NavBar;