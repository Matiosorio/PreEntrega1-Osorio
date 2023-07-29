import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import './CartItem.css'
import { Table } from 'react-bootstrap';


const CartItem = ({item, cantidad, img}) => {
    const {eliminarProducto} = useContext(CarritoContext);

    return (
        <tr>
          <td>
            <div className="item-info" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <img src={img} className="img-carrito" alt={item.nombre} />
              {item.nombre}
            </div>
          </td>
          <td>$ {item.precio}</td>
          <td>{cantidad}</td>
          <td>
            <button className="boton-eliminar" onClick={() => eliminarProducto(item.id)}>Eliminar</button>
          </td>
        </tr>
      );
}

export default CartItem