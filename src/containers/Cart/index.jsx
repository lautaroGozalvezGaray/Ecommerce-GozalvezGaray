import React from 'react';
import { useContext } from 'react';
import { Shop } from '../../contex/ShopContex';
import {TbShoppingCartX} from "react-icons/tb";
import {MdDeleteForever} from "react-icons/md";
import "./styles.css";
import { Link } from 'react-router-dom';


export const Cart = () => {
  const {cart} = useContext(Shop);
  const {removeItem} = useContext(Shop);
  const {removeAll} = useContext(Shop);

  //funcion para calcular el total de los items

  const totalItems = () => {
    let total=0;
    cart.map((element) => (
      total += parseFloat(element.price * element.quantity)
    ));
    return total;
  }
  
  
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
                      <tr className='trProduct'>
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
              <button onClick={removeAll}>Borrar Todo</button>
            </div>
          </div>
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
