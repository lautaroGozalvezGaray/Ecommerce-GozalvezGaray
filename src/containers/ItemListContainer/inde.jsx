import React from "react";
import ItemCount from "../../components/ItemCount";
import "./styles.css";

const ItemListContainer = ({greeting}) => {

    const handleAdd = () => {
        console.log("Se agregó un producto al carrito");
    }

    return(
        <div>
            <p className="itemListContainer">{greeting}</p>
            <ItemCount handleAdd = {handleAdd} initial = {1} stock = {10}></ItemCount>
        </div>
    )
}

export default ItemListContainer;