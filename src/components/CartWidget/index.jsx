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
        <div className="widgetContainer">
            <Link to={"/Cart"} className="link"><HiShoppingCart className="icon"/>{<span>{(cart.length)}</span> && <span className="cartOne">{quantity()}</span>}</Link>

            
        </div>
    )
}

export default CartWidget;