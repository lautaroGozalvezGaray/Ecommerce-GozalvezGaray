import React from "react";
import "./styles.css";

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <p className="itemListContainer">{greeting}</p>
        </div>
    )
}

export default ItemListContainer;