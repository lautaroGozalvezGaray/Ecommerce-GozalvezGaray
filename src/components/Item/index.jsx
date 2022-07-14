import React from 'react'
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

// componente que muestra todos los productos en forma de cart 
const Item = ({products}) => {

  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${products.id}`)

  }
 
  return (
    <div className="card" onClick={handleDetail}>
        <img className="Card-img-top image" src={products.image} alt={products.title}/>
        <div className="Card-body">
          <h5 className="Card-title">{products.title}</h5>
        </div>
        <div>
          <h6>$ {products.price}</h6>
          {products.stock>0 
          ?
            <p className='stock'>Stock disponible: {products.stock}</p>
          :
            <p className='stockOff'>Sin stock</p>
          }
        </div>
        <div>
          <button className='buttonBuy'>Ver más</button>
        </div>
    </div>
  )
}

export default Item;
