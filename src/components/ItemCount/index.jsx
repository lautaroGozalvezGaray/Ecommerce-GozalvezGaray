import React, { useState } from 'react'
import "./styles.css";

const ItemCount = ({initial, stock}) => {

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

    <div className='count'>
        
        <button className='buttonCount' onClick={onDecrement}>-</button>

        <p>{count}</p>

        <button className='buttonCount' onClick={onAdd}>+</button>


    </div>
    
  )
}

export default ItemCount;
