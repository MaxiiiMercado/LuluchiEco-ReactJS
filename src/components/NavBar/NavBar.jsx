import { Navbar, Nav, Container } from 'react-bootstrap/'
import logoRosa from '../../assets/icons/logoRosa.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const NavBar = () => {

    const { totalItems } = useContext(CartContext)

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
                                <NavLink className='nav-link' to="/">Inicio</NavLink>
                                <NavLink className='nav-link' to="/products">Catalogo</NavLink>
                                <NavLink className='nav-link' to={`/category/salud`}>Salud</NavLink>
                                <NavLink className='nav-link' to={`/category/higiene`}>Higiene</NavLink>
                                <NavLink className='nav-link' to={`/category/sinplastico`}>Sin plastico</NavLink>
                            {
                                totalItems !== 0?
                                        <NavLink className='nav-link' to="/cart"><CartWidget /></NavLink>
                                : null
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar
