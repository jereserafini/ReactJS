import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from '../Logo/Logo';
import './NavBar.css';


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                <Logo/>
                {' '}
                Impresión 3D
                </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#features">Tienda</Nav.Link>
                <Nav.Link href="#pricing">¿Quiénes Somos?</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar
