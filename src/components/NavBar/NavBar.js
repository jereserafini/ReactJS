import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from '../Logo/Logo';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';


const NavBar = () => {

    const {qtyProds} = useCartContext()

    return (
        <Navbar className='sticky-top' bg="dark" variant="dark">
            <Container className="d-flex justify-content-between">
                <Link to='/'>
                    <div>
                        <Navbar.Brand>
                        <Logo/>
                        {' '}
                        Impresión 3D
                        </Navbar.Brand>
                    </div>
                </Link>
                <div>
                    <Nav className="me-auto d-flex align-items-center">
                        <Link className='links mx-2' to='categoria/repuestos'>
                            Repuestos
                        </Link>
                        <Link className='links mx-2' to='categoria/impresoras'>
                            Impresoras
                        </Link>
                        <Link className='links mx-2' to='categoria/filamentos'>
                            Filamentos
                        </Link>
                        <Link className='links mx-2' to='/cart'>
                            <CartWidget/>
                        </Link>
                        {/* Globo que muestra la cantidad de productos en el carrito */}
                        <div className='text-black rounded-circle ms-1 px-2 cantidad'>
                            {qtyProds() > 0 && qtyProds()}
                        </div>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar
