import { Navbar, Nav, Container } from 'react-bootstrap/'
import logoRosa from '../../assets/icons/logoRosa.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand href="#inicio">
                        <img
                            alt="Logo Luluchi Eco"
                            src={logoRosa}
                            width="auto"
                            height="40"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#inicio">Inicio</Nav.Link>
                            <Nav.Link href="#tienda">Tienda</Nav.Link>
                            <Nav.Link href="#contacto">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar
