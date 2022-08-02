import { doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../Firebase/config";


const getProductDetail = async (product, params) => {


    const docRef = doc(db, product, params.productId);
                
    const docSnap = await getDoc(docRef);
    
    let productDetail = {}
    if (docSnap.exists()) {
        productDetail = {id : docSnap.id, ...docSnap.data()}
    }else {
        Swal.fire({
            title: `¡El producto requerido no existe!`,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }

    return productDetail;

}

export default getProductDetail;