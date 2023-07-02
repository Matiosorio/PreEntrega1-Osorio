import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="cardProducto">
      <img src={img} className="card-img" />
      <div className="info">
        <h3 style={{ fontSize: '17px' }}>Nombre: {nombre}</h3>
        <p style={{ fontSize: '17px' }}>Precio: $ {precio}</p>
        <p style={{ fontSize: '17px' }}>ID: {id}</p>
        <Link to={`/item/${id}`}>
          <button className="boton-detalle"> Ver Detalle </button>
        </Link>
      </div>
    </div>
  );
}


export default Item