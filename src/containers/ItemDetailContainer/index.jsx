import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import ItemDetail from '../../components/ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';

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
                    console.log("Document data:", docSnap.data());
                    const productDetail = {id : docSnap.id, ...docSnap.data()}
                    setProductDetail(productDetail)
                    setLoading(false)

                } else {
                    console.log("No such document!");
                }
                
            } catch (error) {
                console.log(error);
                setLoading(true)
                setError(true)
            }

        }

    
        /* setTimeout(() => {

            getProduct();
            

        },2000); */

        getProduct();

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

