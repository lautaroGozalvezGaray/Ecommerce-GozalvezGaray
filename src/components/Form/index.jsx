import { useContext } from 'react';
import { useState } from 'react';
import { Shop } from '../../contex/ShopContex';
import { Link } from 'react-router-dom';
import guardarOrden from '../../AuxiliarFunction/saveOrder';
import React from "react";
import { useForm } from 'react-hook-form';



import "./styles.css";
  


export const Form = () => {

    const [nombreFm, setNombre] = useState("");
    const [ApellidoFm, setApellido] = useState("");
    const [emailFm, setEmail] = useState("");
    const [emailConfirmationFm, setEmailConfirmation] = useState("");
    const [phoneFm, setPhone] = useState("");
    /* const [confirm, setConfirm] = useState(true); */

    const {cart} = useContext(Shop);
    const {totalItems} = useContext(Shop);

    const ordenGenerada = () => {
        return {
            buyer: {
                nombre: nombreFm,
                apellido:ApellidoFm,
                email: emailFm,
                emailConfirm: emailConfirmationFm,
                phone: phoneFm
            },
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

   /* const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);*/

    const form = useForm({
        mode: "onChange" // I want to change it to onBlur
    });
    const { register, handleSubmit, formState } = form;
    const { isValid, touchedFields, errors } = formState;
    
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };


    return(

        <div className='formContainer'>
            <h2>Completa tus datos</h2>
            <p>Para poder confirmar la compra, ingresa tus datos:</p>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className='allInput'>
                            <label htmlFor="input1">Nombre<span>*</span></label>
                            <input name='input1' type="text" placeholder="Nombre" {...register("Nombre", {required: true,minLength:3, maxLength: 10})} onChange={e => setNombre(e.target.value)}/>
                            {errors.Nombre && touchedFields.Nombre && (<p>"minimum length is 3"</p>)}
                        </div>
                        <div className='allInput'>
                            <label htmlFor="input2">Apellido<span>*</span></label>
                            <input name='input2' type="text" placeholder="Apellido" {...register("Apellido", {required: true, minLength:3, maxLength: 10})} onChange={e => setApellido(e.target.value)}/>
                        </div>
                        <div className='allInput'>
                            <label htmlFor="input3">Email<span>*</span></label>
                            <input  type="text" name='input3' placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className='allInput'>
                            <label htmlFor="input4">Repite tu Email<span>*</span></label>
                            <input  type="text" name='input4' placeholder="Confirmar Email" {...register("Confirmar Email", {required: true, pattern: /^\S+@\S+$/i})} onChange={e => setEmailConfirmation(e.target.value)} />
                        </div>
                        <div className='allInput'>
                            <label htmlFor="input5">Telefono<span>*</span></label>
                            <input  name='input5' type="tel" placeholder="Telefono" {...register("Telefono", {required: true, minLength: 6, maxLength: 12})} onChange={e => setPhone(e.target.value)} />
                        </div>
                    </div>

                    <div className="confirmButton">
                        <Link className="linkEmpty" to={"/Cart"}>🡠 Atrás</Link>
                        {/* <button onClick={confirmOrden}>Confirmar Compra</button> */}
                        <input onClick={confirmOrden} disabled={isValid}  type="submit" />
                    </div>

                </form>
            </div>
        </div>




    )

}
