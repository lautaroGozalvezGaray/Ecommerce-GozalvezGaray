import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

    const[productDetail, setProductDetail] = useState({});

    const params = useParams();


    useEffect(() => {
        const getProduct = async () => {

            try {
                const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
                const data = await response.json();
                setProductDetail(data);
            
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
        <ItemDetail product={productDetail}/>
    )
}

export default ItemDetailContainer;
