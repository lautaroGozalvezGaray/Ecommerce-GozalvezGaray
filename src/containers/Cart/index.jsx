import React from 'react';
import { useContext } from 'react';
import { Shop } from '../../contex/ShopContex';
import {TbShoppingCartX} from "react-icons/tb";
import {MdDeleteForever} from "react-icons/md";
import "./styles.css";
import { Link } from 'react-router-dom';

// componente cart encargado de mostrar los productos en un carrito de compra

export const Cart = () => {
  const {cart} = useContext(Shop);
  const {removeItem} = useContext(Shop);
  const {removeAll} = useContext(Shop);
  const {totalItems} = useContext(Shop);

  
 return(

    <>
    {
      cart.length > 0
      ? 
        <>
        <div className='containerAll'>
          <div className='tableContainer'>
            <table className='table'>

              <tbody>
                <tr className='trTitle'>
                  <th>Cantidad</th>
                  <th>Categoria</th>
                  <th>Producto</th>
                  <th>Precio</th>
                </tr>
                {cart.map(producto => {
                    return(
                      <tr key={producto.id} className='trProduct'>
                        <td className='tdDescription'>{producto.quantity}</td>
                        <td className='tdDescription'>{producto.category}</td>
                        <td className='tdProduct'><img className="imageCart" src={producto.image} alt={producto.title}/>{producto.title}</td>
                        <td className='tdDescription'>${producto.price} <Link onClick={() => removeItem(producto.id)} to={"#"}><MdDeleteForever className='iconDetele'/></Link></td>
                      </tr>
                    )
                  }
                )}
                
                <tr className='trTotal'>
                  <th></th>
                  <th></th>
                  <th>Total</th>
                  <th>$ {totalItems()}</th>
                </tr>
  
              </tbody>
            </table>
            <div className='containerBtnDelete'>
              <button key={1} onClick={removeAll}>Borrar Todo</button>
            </div>
          </div>
        </div>
        <div className='btnCheckOut'>
          <ul>
            <li><Link className="linkCheck" to={"/Form"} >Check-Out</Link></li>
          </ul>
        </div>
      </>
      :

      <div  className='cartEmpty'>
        <TbShoppingCartX className='iconEmpty'/>
        <p>Ups! Parece que no hay productos en el carrito...</p>
        <div className='btnEmpty'>
          <ul>
            <li><Link className="linkEmpty" to={"/"}>Inicio</Link></li>
          </ul>
        </div>
      </div>
 
    }

    </>
    
  )
}
