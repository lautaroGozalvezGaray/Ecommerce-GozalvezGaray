import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import ItemDetail from '../../components/ItemDetail';
import Swal from 'sweetalert2';
import getProductDetail from '../../utils/getProductDetail';


// componente que se encarga de mostrar el detalle del producto

const ItemDetailContainer = () => {

    const[productDetail, setProductDetail] = useState({});
    const [ loading, setLoading] = useState(true);
    const params = useParams();


    useEffect(() => {
        const getProduct = async () => {

            try {
                
                const product = await getProductDetail("products", params);
                setProductDetail(product);
                setLoading(false)
                
            } catch (error) {
                setLoading(true)
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
                <>
                    <ItemDetail product={productDetail}/>
                </>
            }
        </div>
        
    )
}

export default ItemDetailContainer;

