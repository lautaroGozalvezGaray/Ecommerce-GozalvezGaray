import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../../components/ItemList";
import "./styles.css";

const ItemListContainer = ({greeting}) => {


    const [product, setProductos] = useState(null);

    useEffect(() => {

        const getProductos = async () => {
        try {
            const response = await fetch('/mocks/data.json');
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            console.log("Hubo un error:");
            console.log(error);
        }
        }

        setTimeout(()=>{
            getProductos();
        },2000)
        

    }, [])

    console.log(product);

    return(
        <div>
            <div>
                {product ?
                    <ItemList products={product} />
                    :
                    null
                }
            </div>
        </div>
    )
}

export default ItemListContainer;