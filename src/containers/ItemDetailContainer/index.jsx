import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import ItemDetail from '../../components/ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';
import Swal from 'sweetalert2';


// componente que se encarga de mostrar el detalle del producto

const ItemDetailContainer = () => {

    const[productDetail, setProductDetail] = useState({});
    const [ loading, setLoading] = useState(true);
    const [ error, setError ] = useState(false);


    const params = useParams();


    useEffect(() => {
        const getProduct = async () => {

            try {

               const docRef = doc(db, "products", params.productId);
                
               const docSnap = await getDoc(docRef);
                

                if (docSnap.exists()) {
                    const productDetail = {id : docSnap.id, ...docSnap.data()}
                    setProductDetail(productDetail)
                    setLoading(false)

                } else {
                    Swal.fire({
                        title: `¡El producto requerido no existe!`,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
                
            } catch (error) {
                setLoading(true)
                setError(true)
                Swal.fire({
                    title: `¡Se produjo un error!`,
                    text: `Error code: ${error}`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }

        }

        getProduct();

    }, [params])

    return (
        
        
        
        <div>
            { loading ? 
                <SyncLoader margin={10} className="loader"/> 
                : 
                error ?
                    <>
                        <div>
                            <p>no se encontro el producto</p>
                        </div>
                    </>
                    :

                    <>
                        <ItemDetail product={productDetail}/>
                    </>
            }
        </div>
        
    )
}

export default ItemDetailContainer;

