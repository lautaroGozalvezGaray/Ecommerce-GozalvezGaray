import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

    const[productDetail, setProductDetail] = useState({});
    const [ loading, setLoading] = useState(true);
    const [ error, setError ] = useState(false);


    const params = useParams();


    useEffect(() => {
        const getProduct = async () => {

            try {
                const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
                const data = await response.json();
                setProductDetail(data)
                setLoading(false)
                
            } catch (error) {
                console.log(error);
                setLoading(true)
                setError(true)
            }

        }

    
        setTimeout(() => {

            getProduct();
            

        },2000);

    }, [params])

    console.log(productDetail);

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

