import React from "react";
import "./NavBar.css";

const NavBar = () =>{
    return(
        <ul>
            <li><a className="active" href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    )
}

export default NavBar;