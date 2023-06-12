import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" style={{ borderBottom: '1px solid black' }}>
      <Container>
        <Navbar.Brand href="#home"><img src="./img/logo.png" alt="Logo Distrimax" className="logo-img"/></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#limpieza">Limpieza</Nav.Link>
          <Nav.Link href="#pileta">Pileta</Nav.Link>
          <Nav.Link href="#accesorios">Accesorios</Nav.Link>
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>
  )
}

export default NavBar
