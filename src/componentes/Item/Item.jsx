import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
      <Card className='cardProducto' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} className="card-img" />
        <Card.Body>
          <Card.Title>Nombre: {nombre} </Card.Title>
          <Card.Text> Precio: {precio} </Card.Text>
          <Card.Text> ID: {id} </Card.Text>
          <Link to={`/item/${id}`} >
          <Button variant="primary"> Ver Detalle </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  } 


export default Item