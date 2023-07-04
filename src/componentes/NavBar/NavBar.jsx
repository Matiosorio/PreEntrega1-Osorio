import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" style={{ borderBottom: '1px solid black' }}>
      <Container>
        <Link to="/">
          <Navbar.Brand><img src="../img/logo.png" alt="Logo Distrimax" className="logo-img" /></Navbar.Brand>
        </Link>

        <Nav className="me-auto">
          <NavLink to="/categoria/1" className="navbar-link"> Limpieza </NavLink>
          <NavLink to="/categoria/2" className="navbar-link" > Pileta </NavLink>
          <NavLink to="/categoria/3" className="navbar-link" > Accesorios </NavLink>
          <NavLink to="/categoria/4" className="navbar-link" > Insecticidas </NavLink>
          <NavLink to="/categoria/5" className="navbar-link" > Papeles </NavLink>
          <NavLink to="/categoria/6" className="navbar-link" > Lavado </NavLink>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar
