import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import ItemCount from '../ItemCount';
import "./styles.css";


const ItemDetail = ({product}) => {

  const navigate = useNavigate();

  const [qtyAdded, setQtyAdded] = useState(0);

  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  }

  const handleTerminate = () => {
    navigate("/Cart");
  }

  console.log(qtyAdded);

  return (
    <div className='ContainerCardDetail'>
      <div className='containerDetail'>
        <div className='containerImg'>
            <img className='imageDetail' src={product.image} alt={product.title}/>
        </div>
        <div className='containerDescription'>
            <h1>{product.title}</h1>
            <p className='price'>${product.price}</p>
            <h6>{product.category}</h6>
            <p className='titleDescription'>Descripcion del producto</p>
            <p className='description'>{product.description}</p>
            <div className='containerBtn'>
              {!qtyAdded ? 
                <ItemCount className="count" onConfirm={handleConfirm} initial = {1} stock = {10}></ItemCount>
                :
                <button onClick={handleTerminate} className='btnAdd'>Agregar</button>
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;
