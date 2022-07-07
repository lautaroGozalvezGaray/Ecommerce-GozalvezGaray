import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
/* import { SyncLoader } from 'react-spinners'; */
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

    const[productDetail, setProductDetail] = useState({});
    /* const [loading, setloading] = useState(true); */


    const params = useParams();


    useEffect(() => {
        const getProduct = async () => {

            try {
                const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
                const data = await response.json();
                setProductDetail(data)
                /* setloading(false); */
            
            } catch (error) {
                console.log(error);
            }

        }

    
        setTimeout(() => {

            getProduct();

        },2000);

    }, [params])

    console.log(productDetail);

    return (
        
        <div>
            <ItemDetail product={productDetail}/>
            {/* <div>
                { loading === false ?
                    
                    <ItemDetail products={productDetail}/>
                   
                    :

                    <SyncLoader margin={10} className="loader"/>
                    
                }
            </div>  */}
        </div>
    )
}

export default ItemDetailContainer;

