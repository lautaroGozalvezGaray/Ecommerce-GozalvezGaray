import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import "./styles.css";

const ItemListContainer = ({greeting}) => {


    const [product, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([])

    const params = useParams();

    

    useEffect(() => {

        const getProductos = async () => {
        try {
            const response = await fetch('/mocks/data.json');
            const data = await response.json();
            setProductos(data);
            setProductosFiltrados(data);
        } catch (error) {
            console.log("Hubo un error:");
            console.log(error);
        }
        }

        setTimeout(()=>{
            getProductos();
        },2000)
        

    }, [])

    useEffect(() => {
        if (params?.categoryId) {
          const productosFiltrados = product.filter(producto => producto.category === params.categoryId)
          setProductosFiltrados(productosFiltrados)
        } else {
          setProductosFiltrados(product)
        }
    }, [params, product])

    return(
        <div>
            <div>
                {product.length !== 0  ?
                    <ItemList products={productosFiltrados} />
                    :
                    <p>Loading...</p>
                }
            </div>
        </div>
    )
}

export default ItemListContainer;