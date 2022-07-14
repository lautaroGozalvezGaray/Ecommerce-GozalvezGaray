import React, { useState } from 'react'
import "./styles.css";
// componente que maneja el boton contador de productos
const ItemCount = ({initial, stock, onConfirm}) => {

    const [count, setCount] = useState(1);

    const handleConfirm = () => {
        onConfirm(count)
    }

    const onAdd = () => {
        if(count < stock){
            setCount(count+1);
        }
    };

    const onDecrement = () => {

        if( count>initial ){
            setCount(count-1);
        }

    };

  return (

    <div>
        <div className='count'>
        
        <button className='buttonCount' onClick={onDecrement}>-</button>

        <p>{count}</p>

        <button className='buttonCount' onClick={onAdd}>+</button>

        </div>
        <div>
            <button className='btnConfirm' onClick={handleConfirm}>Confirmar</button>
        </div>
    </div>
    
  )
}

export default ItemCount;
