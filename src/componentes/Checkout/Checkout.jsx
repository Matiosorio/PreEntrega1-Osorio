import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css';

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmación, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [mostrarAgradecimiento, setMostrarAgradecimiento] = useState(false);

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmación) {
            setError("Por favor llenar todos los campos")
            return;
        }

        if (email !== emailConfirmación) {
            setError("Los campos del email no coinciden");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id);

                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                        setMostrarAgradecimiento(true);
                    })
                    .catch((error) => {
                        console.log("Error al crear la orden", error);
                        setError("Error al crear la orden. Vuelva a intentarlo");
                    });
            })
            .catch((error) => {
                console.log("No se puede actualizar el stock", error);
                setError("No se puede actualizar el stock");
            });

    };

    return (
        <div className="container">
            <h2>Checkout</h2>
            {mostrarAgradecimiento ? (
                <strong>¡Gracias por tu compra! Tu número de orden es {ordenId} </strong>
            ) : (
                <form onSubmit={manejadorFormulario}>
                    {
                        carrito.map(producto => (
                            <div key={producto.item.id} >
                                <p> {producto.item.nombre} x {producto.cantidad} </p>
                                <p> $ {producto.item.precio} </p>
                                <hr />
                            </div>
                        ))
                    }
                    <strong>Cantidad Total: {cantidadTotal} </strong>
                    <strong>Precio Total: $ {total.toFixed(2)} </strong>
                    <hr />

                    <div className="form-group">
                        <label htmlFor="nombre"> Nombre </label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellido"> Apellido</label>
                        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefono"> Telefono</label>
                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email"> Email </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email"> Email Confirmación </label>
                        <input type="email" value={emailConfirmación} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                    </div>

                    {error && <p style={{ color: "red" }}> {error} </p>}

                    <div className="boton-container">
                        <button className="boton-checkout" type="submit">Finalizar Compra</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Checkout;
