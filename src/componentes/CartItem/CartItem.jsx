import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import './CartItem.css'


const CartItem = ({item, cantidad, img}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div>
        <h4> {item.nombre} </h4>
        <img src={img} className="img-carrito" />
        <p> Cantidad: {cantidad} </p>
        <p> Precio: $ {item.precio} </p>
        <button className="boton-eliminar" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
        <hr />
    </div>
  )
}

export default CartItem