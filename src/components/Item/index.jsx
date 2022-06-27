import React from 'react'
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from "../ItemCount/index";


const Item = ({products}) => {
  return (
    <div className="card">
        <img className="Card-img-top image" src={products.image} alt={products.title}/>
        <div className="Card-body">
          <h5 className="Card-title">{products.title}</h5>
        </div>
        <div className='PriceAndAdd'>
          <h6>$ {products.price}</h6>
          <ItemCount initial = {1} stock = {10}></ItemCount>
        </div>
        <div>
          <button className='buttonBuy'>Comprar</button>
        </div>
    </div>
  )
}

export default Item;
