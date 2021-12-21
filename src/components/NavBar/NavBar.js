import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from '../Logo/Logo';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="d-flex justify-content-between">
                <div>
                    <Navbar.Brand href="#inicio">
                    <Logo/>
                    {' '}
                    Impresión 3D
                    </Navbar.Brand>
                </div>
                <div>
                    <Nav className="me-auto d-flex align-items-center">
                    <Nav.Link href="#inicio">Inicio</Nav.Link>
                    <Nav.Link href="#tienda">Tienda</Nav.Link>
                    <Nav.Link href="#quienessomos">¿Quiénes Somos?</Nav.Link>
                    <Nav.Link href="#cart"><CartWidget/></Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar
