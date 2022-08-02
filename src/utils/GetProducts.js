import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../Firebase/config";


const getProducts = async (allProducts) => {
    const q = query(collection(db, allProducts));
    const querySnapshot = await getDocs(q);
    const productos = []
    querySnapshot.forEach((doc) => {
        productos.push({ id: doc.id, ...doc.data() })
    });
    return productos
}

export default getProducts;