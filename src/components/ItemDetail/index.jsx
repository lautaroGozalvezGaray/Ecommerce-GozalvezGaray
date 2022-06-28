import React from 'react'
import ItemCount from '../ItemCount';
import "./styles.css";

const ItemDetail = ({product}) => {
  return (
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
                <ItemCount className="count" initial = {1} stock = {10}></ItemCount>
                <button className='btnAdd'>Agregar</button>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail;
