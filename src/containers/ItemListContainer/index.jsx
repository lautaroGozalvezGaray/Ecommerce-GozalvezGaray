import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import {SyncLoader} from "react-spinners";
import { collection, query, getDocs } from "firebase/firestore";
import "./styles.css";
import { db } from "../../Firebase/config";

const ItemListContainer = ({greeting}) => {


    const [product, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([])

    const params = useParams();

    

    useEffect(() => {

        const getProductos = async () => {
        try {

            const q = query(collection(db, "products"));

            const querySnapshot = await getDocs(q);

            const productos = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                /* console.log(doc.id, " => ", doc.data()); */
                productos.push({id: doc.id, ...doc.data()});

            });

            console.log(productos)

            setProductos(productos);
            setProductosFiltrados(productos);


            /* const response = await fetch('/mocks/data.json');
            const data = await response.json(); */
            
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
                    
                    <>
                        <div className="containerTitleHome"><div className="TitleHome"><h1 className="h1Title">Para los más exigentes contamos con lo último en tecnología</h1></div></div>
                        <ItemList products={productosFiltrados} />
                    </>
                    :
                    <SyncLoader margin={10} className="loader"/>
                    
                }
            </div>
        </div>
    )
}

export default ItemListContainer;