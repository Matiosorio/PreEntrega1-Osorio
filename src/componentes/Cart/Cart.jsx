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
                <h2 style={{ fontSize: '20px' }}> No hay productos en el carrito </h2>
                <Link to="/" className='link-carrito' style={{ marginTop: "20px" }}> Ver Productos </Link>
            </div>
        );
    }

  
    return (
        <div className="carrito-container">
            <table className="cart-table">
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Producto</th>
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
      <hr />
      <h3 style={{ fontSize: '20px' }}>Total: $ {total.toFixed(2)}</h3>
      <h3 style={{ fontSize: '20px' }}>Cantidad total: {cantidadTotal}</h3>
      <button className="boton-cart" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
      <Link className='link-carrito' to="/checkout">Finalizar Compra</Link>
    </div>
  );
}

export default Cart