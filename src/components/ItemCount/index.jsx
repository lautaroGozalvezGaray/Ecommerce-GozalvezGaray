import React, { useState } from 'react'
import "./styles.css";

const ItemCount = ({handleAdd, initial, stock}) => {

    const [count, setCount] = useState(1);

    const onAdd = () => {
        if(count < stock){
            setCount(count+1);
        }

        return setCount;
    };

    const onDecrement = () => {

        if( count>initial ){
            setCount(count-1);
        }

        return setCount;

    };



  return (
    <div className='containerCard'>
        <div className='card'>    
        <h1>"producto"</h1>
        <div className='count'>

            <button className='buttonCount' onClick={onDecrement}>-</button>

            <p>{count}</p>

            <button className='buttonCount' onClick={onAdd}>+</button>

            
        </div>

        <button className='buttonAdd' onClick={handleAdd}>Agregar al carrito</button>

    </div>

    </div>
    
  )
}

export default ItemCount;
