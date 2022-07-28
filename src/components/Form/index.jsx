import { useContext } from 'react';
import { useState, useRef } from 'react';
import { Shop } from '../../contex/ShopContex';
import { Link } from 'react-router-dom';
import guardarOrden from '../../AuxiliarFunction/saveOrder';
import React from "react";
import {useForm } from 'react-hook-form';
import {GrCircleAlert} from "react-icons/gr";
import "./styles.css";

export const Form = () => {

    const [textError, SetTextError] = useState(false);

    const {cart} = useContext(Shop);

    const {removeAll} = useContext(Shop);

    

    const {totalItems} = useContext(Shop);

    const datos = useRef({nombreFm:"", ApellidoFm: "", emailFm:"", emailConfirmationFm:"", phoneFm:""})

    const ordenGenerada = () => {
        return {
            buyer: datos,
            items: cart,
            total: totalItems(),
            createdAt: new Date().toLocaleString()
        }
    }
    console.log(ordenGenerada())
    
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
            removeAll();
        }else{
            SetTextError(true)
        }
    }

    return(

        <div className='formContainer'>
            <h2>Completa tus datos</h2>
            <p>Para poder confirmar la compra, ingresa tus datos:</p>
            <div>
                <form /* onSubmit={handleSubmit(onSubmit)} */>
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

                </form>
            </div>
        </div>



    )
}

