import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../Firebase/config.jsx";
import Swal from 'sweetalert2';



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
                        /* alert("Se genero la order con id: " + id) */
                        
                        Swal.fire({
                            title: `Gracias por su compra.`,
                            text: `ID compra: ${id}`,
                            icon: 'success',
                            footer: 'Porfavor guarde el ID de su compra.',
                            confirmButtonText: 'Cerrar'
                        }).then(response=>{
                            if(response.isConfirmed){
                                window.location = "/";
                            }
                        })
                    })
                }).catch((err) => {
                    console.log(`Error: ${err.message}`);
                })
            
            } else {
                let mensaje = ''
                for (const producto of outOfStock) {
                    mensaje += `${producto.title}`
                }
                /* alert(`Productos fuera de stock: ${mensaje}`) */
                Swal.fire({
                    title: `¡Hay productos fuera de stock!`,
                    text: `Producto: ${mensaje} \n
                     Porfavor revisá el carrito de compras`,
                    icon: 'error',
                    confirmButtonText: 'Carrito'
                }).then(response=>{
                    if(response.isConfirmed){
                        window.location = "/Cart";
                    }
                })
            }
        })
    })
}

export default guardarOrden;