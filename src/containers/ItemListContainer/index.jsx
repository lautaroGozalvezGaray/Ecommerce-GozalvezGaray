import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import {SyncLoader} from "react-spinners";
import "./styles.css";
import Swal from "sweetalert2";
import getProducts from "../../utils/GetProducts";


const ItemListContainer = () => {


    const [product, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([])
    const params = useParams();

    useEffect(() => {

        const getProductos = async () => {
            try {
                /* const q = query(collection(db, "products" ));

                const querySnapshot = await getDocs(q);

                const productos = [];
                querySnapshot.forEach((doc) => {
                    productos.push({id: doc.id, ...doc.data()});

                }); */

                const productos = await getProducts("products");

                setProductos(productos);
                setProductosFiltrados(productos);
        
            } catch (error) {
                Swal.fire({
                    title: `No se pudieron obtener los producutos!`,
                    text: `Error code: ${error}`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        }

        getProductos();

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