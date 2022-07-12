import React from "react";
import { useContext } from "react";
import {HiShoppingCart} from "react-icons/hi";
import { Shop } from "../../contex/ShopContex";
import { Link } from "react-router-dom";
import "./styles.css";

const CartWidget = () => {
    const {cart} = useContext(Shop);
    const {quantity} = useContext(Shop);

    return(
        <>
        {cart.length > 0 
        ? <Link to={"/Cart"} className="link"><HiShoppingCart className="icon"/>{<span className="cartOne">{quantity()}</span>}</Link> 
        : <Link to={"/Cart"} className="link"><HiShoppingCart className="icon"/></Link> 

        }
        </>
        
    )
}

export default CartWidget;