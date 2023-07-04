import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

  const [actualizarCantidad, setActualizarCantidad] = useState(0);

  const manejadorCantidad = (cantidad) => {
    setActualizarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  }
  return (
    <div className='container'>
      <div className='card-detalle'>
        <h2>{nombre} </h2>
        <h3> $ {precio} </h3>
        <h3>Stock disponible: {stock} </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi provident earum placeat maiores corrupti similique laudantium commodi natus officia voluptate, excepturi illo laborum quae aliquid quam fugit eaque expedita perferendis?</p>
        <img src={img} alt={nombre} className="card-img" />
        {actualizarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)}
      </div>
    </div>

  )
}

export default ItemDetail