import { Navbar, Nav, Container } from 'react-bootstrap/'
import logoRosa from '../../assets/icons/logoRosa.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.scss'
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/">
                            <img alt="Logo Luluchi Eco" src={logoRosa} className="d-inline-block align-top logoNav" />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <NavLink to="/">
                                    Inicio
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={`/category/salud`}>Salud</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={`/category/higiene`}>Higiene</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={`/category/sinplastico`}>Sin plastico</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/cart"><CartWidget /></Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar
