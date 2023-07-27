import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import './CartItem.css'


const CartItem = ({item, cantidad, img}) => {
    const {eliminarProducto} = useContext(CarritoContext);

    return (
      <div className="cart-item-container">
          <div className="item-details">
              <img src={img} className="img-carrito" />
              <div className="item-info">
                  <h4> {item.nombre} </h4>
                  <p> Cantidad: {cantidad} </p>
                  <p> Precio: $ {item.precio} </p>
              </div>
          </div>
          <button className="boton-eliminar" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
      </div>
  );
}

export default CartItem