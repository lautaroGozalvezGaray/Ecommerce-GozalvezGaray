import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

    const[productDetail, setProductDetail] = useState({});


    useEffect(() => {
        const getProduct = async () => {

            try {
                const response = await fetch('https://fakestoreapi.com/products/14');
                const data = await response.json();
                setProductDetail(data);
            
            } catch (error) {
                console.log(error);
            }

        }
    
        setTimeout(() => {

            getProduct();

        },2000);

    }, [])

    console.log(productDetail);

    return (
        <ItemDetail product={productDetail}/>
    )
}

export default ItemDetailContainer;
