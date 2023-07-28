import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="carrito-vacio">
                <h2> No hay productos en el carrito </h2>
                <Link to="/"> Ver Productos </Link>
            </div>
        );
    }

    // Redondeo el total a 2 decimales
    const totalArreglado = total.toFixed(2);

    return (
        <div className="carrito-container">
            <table className="cart-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((producto) => (
            <CartItem key={producto.item.id} item={producto.item} cantidad={producto.cantidad} img={producto.item.img} />
          ))}
        </tbody>
      </table>
      <h3>Total: $ {total.toFixed(2)}</h3>
      <h3>Cantidad total: {cantidadTotal}</h3>
      <button className="boton-cart" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
      <Link className='link-finalizar' to="/checkout">Finalizar Compra</Link>
    </div>
  );
}

export default Cart