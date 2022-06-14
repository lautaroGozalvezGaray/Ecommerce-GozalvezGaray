import React from "react";
import "./NavBar.css";

const NavBar = () =>{
    return(
        <div className="navContainer">
            <img className="logo" src="https://tonersafe.mx/wp-content/uploads/2019/12/En-construccion.png" alt="logo"></img>
            <ul>
                
                <li><a className="active" href="#inicio">Inicio</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>

        </div>
        
    )
}

export default NavBar;