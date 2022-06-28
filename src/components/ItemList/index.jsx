import React from 'react'
import Item from '../Item';
import "./styles.css";

const ItemList = ({products}) => {
  return (
    
    <div className='containerCards'>

      {/* {products.map(product => {

        return <Item products = {product} key = {product.id}/>

      })} */}

    </div>
    
  )
}

export default ItemList;