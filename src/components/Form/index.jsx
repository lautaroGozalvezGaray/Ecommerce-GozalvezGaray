import { useContext } from 'react';
import { useState, useRef } from 'react';
import { Shop } from '../../contex/ShopContex';
import { Link } from 'react-router-dom';
import React from "react";
import {useForm } from 'react-hook-form';
import {GrCircleAlert} from "react-icons/gr";
import "./styles.css";
import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../../Firebase/config.jsx";
import Swal from 'sweetalert2';
import {Navigate} from 'react-router-dom';

export const Form = () => {

    const [textError, SetTextError] = useState(false);
    const {cart} = useContext(Shop);
    const {removeAll} = useContext(Shop);
    const [toCart, setToCart] = useState(false);
    const [toHome, setToHome] = useState(false);
    const {totalItems} = useContext(Shop);


    const guardarOrden = (cart, orden) => {
        
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
        
                if (outOfStock.length === 0) {
                    addDoc(collection(db, 'orders'), orden).then(({ id }) => {
                        
                        batch.commit().then(() => {
                            Swal.fire({
                                title: `Gracias por su compra.`,
                                text: `ID compra: ${id}`,
                                icon: 'success',
                                footer: 'Porfavor guarde el ID de su compra.',
                                confirmButtonText: 'Cerrar'
                            }).then(response=>{
                                if(response.isConfirmed){
                                    setToHome(true);
                                    removeAll();
                                }
                            })
                        })
                    }).catch((error) => {
                        Swal.fire({
                            title: `¡Se produjo un error!`,
                            text: `Error code: ${error}`,
                            icon: 'error',
                            confirmButtonText: 'Ok'
                        })
                    })
                
                } else {
                    let mensaje = ''
                    for (const producto of outOfStock) {
                        mensaje += `${producto.title}`
                    }
                    Swal.fire({
                        title: `¡Hay productos fuera de stock!`,
                        text: `Producto: ${mensaje}`,
                        html: `<p>Producto: ${mensaje}</p> \n \n  <p>Porfavor revisa el carrito de compras</p>`,
                        icon: 'error',
                        confirmButtonText: 'Carrito'
                    }).then(response=>{
                        if(response.isConfirmed){
                            setToCart(true);
                        }
                    })
                }
            })
        })
    }

    const datos = useRef({nombreFm:"", ApellidoFm: "", emailFm:"", emailConfirmationFm:"", phoneFm:""})

    const ordenGenerada = () => {
        return {
            buyer: datos,
            items: cart,
            total: totalItems(),
            createdAt: new Date().toLocaleString()
        }
    }
    
    const confirmOrden = async() => {
        const orden = ordenGenerada();
        guardarOrden(cart, orden)
    }

    const form = useForm({
        mode: "onChange"
    });
    const { register, handleSubmit, formState} = form;
    let {isValid} = formState;

    const onSubmit = (data) => {
        datos.current = {nombreFm:data.Nombre, ApellidoFm: data.Apellido, emailFm: data.Email, emailConfirmationFm: data.ConfirmarEmail, phoneFm: data.Phone}

        if(data.Email === data.ConfirmarEmail){
            confirmOrden();
        }else{
            SetTextError(true)
        }
    }

    return(

        <div className='formContainer'>
            <h2>Completa tus datos</h2>
            <p>Para poder confirmar la compra, ingresa tus datos:</p>
            <div>
                <form>
                    <div>
                        <div className='allInput'>
                            <label htmlFor="Nombre">Nombre<span>*</span></label>
                            <input name='Nombre' type="text" placeholder="Nombre"  
                            {...register("Nombre", {required: true, minLength:3, maxLength: 10, pattern: /^[A-Za-z\s]+$/g})}/>
                        </div>
                        <div className='allInput'>
                            <label htmlFor="input2">Apellido<span>*</span></label>
                            <input name='input2' type="text" placeholder="Apellido" 
                            {...register("Apellido", {required: true, minLength:3, maxLength: 15, pattern: /^[A-Za-z\s]+$/i})}/>
                        </div>
                        <div className='allInput'>
                            <label htmlFor="input3">Email<span>*</span></label>
                            <input  type="text" name='input3' placeholder="Email" 
                            {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}/>
                        </div>
                        <div className='allInput'>
                            <label htmlFor="input4">Repite tu Email<span>*</span></label>
                            <input  type="text" name='input4' placeholder="Confirmar Email" 
                            {...register("ConfirmarEmail", {required: true, pattern: /^\S+@\S+$/i})} />
                        </div>
                        <div className='allInput'>
                            <label htmlFor="input5">Telefono<span>*</span></label>
                            <input  name='input5' type="tel" placeholder="Telefono" 
                            {...register("Phone", {required: true, minLength: 6, maxLength: 12, pattern: /^[0-9]*(\.?)[0-9]+$/})} />
                        </div>
                    </div>

                    <div className='containerError'>
                        {textError ? <> <GrCircleAlert className='iconError'/><p className='textError'>Ambos email deben coincidir</p></> : null}
                    </div>

                    <div className="confirmButton">
                        <Link to={"/Cart"}><button className="linkFormBack">🡠 Atras</button></Link>
                        {isValid ?  <button onClick={handleSubmit(onSubmit)} className="linkFormConfirm">Finalizar</button> : null}
                    </div>

                    <>{toCart ? <Navigate to={"/Cart"}></Navigate> : null}</>

                    <>{toHome ? <Navigate to={"/"}></Navigate> : null}</>

                </form>
            </div>
        </div>



    )
}

