import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../Firebase/config.jsx"

const guardarOrden = (cart, orden) => {
    console.log("Guardar orden");
    console.log(cart);
    console.log(orden);
    
    
    const batch = writeBatch(db)
    
    const outOfStock = []
    
    cart.forEach((productoEnCart) => {
        getDoc(doc(db, 'products', productoEnCart.id))
        .then(async (documentSnapshot) => {
            
            const producto = {...documentSnapshot.data(), id: documentSnapshot.id};

            
            if (producto.stock >= productoEnCart.quantity) {
                batch.update(doc(db, 'products', producto.id) ,{
                    stock: producto.stock - productoEnCart.quantity
                })
            } else {
                outOfStock.push(producto)
            }
            console.log("Productos fuera de stock:");
            console.log(outOfStock);
    
            if (outOfStock.length === 0) {
                addDoc(collection(db, 'orders'), orden).then(({ id }) => {
                    
                    batch.commit().then(() => {
                        alert("Se genero la order con id: " + id)
                    })
                }).catch((err) => {
                    console.log(`Error: ${err.message}`);
                })
            
            } else {
                let mensaje = ''
                for (const producto of outOfStock) {
                    mensaje += `${producto.title}`
                }
                alert(`Productos fuera de stock: ${mensaje}`)
            }
        })
    })
}

export default guardarOrden;