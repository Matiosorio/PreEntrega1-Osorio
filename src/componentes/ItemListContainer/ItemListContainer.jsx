import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcion = idCategoria ? getProductosPorCategoria : getProductos;

    funcion(idCategoria)
      .then(respuesta => setProductos(respuesta))
  }, [idCategoria])


  return (
    <>
      <h2 className='text-center m-5'>{greeting} </h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer