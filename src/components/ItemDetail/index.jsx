import React, { useContext, useState } from 'react'
import {useNavigate} from "react-router-dom";
import ItemCount from '../ItemCount';
import { Shop } from "../../contex/ShopContex";
import "./styles.css";

// componente que muestra en detalle un producto

const ItemDetail = ({product}) => {

  const navigate = useNavigate();

  const [qtyAdded, setQtyAdded] = useState(0);

  const {addItem} = useContext(Shop);

  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  }

  const handleTerminate = () => {
    addItem(product, qtyAdded);
    navigate("/Cart");
  }

  console.log(qtyAdded);

  return (
    <div className='ContainerCardDetail'>
      <div className='containerDetail'>
        <div className='containerImg'>
            <>
            {product.category === "notebooks"
            ?
            <img className='imageDetail' src={product.image} alt={product.title}/>
            :
            <img className='imageDetailAlternative' src={product.image} alt={product.title}/>
            }
            </>
          

        </div>
        <div className='containerDescription'>
            <h1>{product.title}</h1>
            <p className='price'>${product.price}</p>
            <h6>{product.category}</h6>
            <p className='titleDescription'>Descripcion del producto</p>
            <p className='description'>{product.description}</p>
            <div className='containerBtn'>
              {product.stock>0
              ?
              <>
                <h6>Stock disponible: {product.stock}</h6>
                {!qtyAdded ? 
                  <ItemCount className="count" onConfirm={handleConfirm} initial = {1} stock = {product.stock}></ItemCount>
                  :
                  <button onClick={handleTerminate} className='btnAdd'>Agregar</button>
                }
              </>
              :
              <p className='stockOffDetail'>SIN STOCK</p>
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;
