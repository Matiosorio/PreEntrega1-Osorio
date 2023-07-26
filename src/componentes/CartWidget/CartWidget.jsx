import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import './CartWidget.css'


const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div>
      <Link to="/cart" className="link-cart">
        <img style={{ width: "3rem" }} src="../img/carrito.png" alt="Carrito de compras" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget