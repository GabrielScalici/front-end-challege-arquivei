import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

//IMAGENS
import logo from '../images/logo.png';

//TELAS
import Home from '../screens/Home';
import Consulta from '../screens/Consulta';
import Perfil from '../screens/Perfil';
import Promocao from '../screens/Promocao';


const NavBar = (props) => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                <Navbar.Brand href="#home"> Arquivei Lite </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/consulta">Consulta</Nav.Link>
                            <Nav.Link href="/perfil">Perfil</Nav.Link>
                            <Nav.Link href="/promocao">Promoção</Nav.Link> */}
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#consulta">Consulta</Nav.Link>
                        <Nav.Link href="#perfil">Perfil</Nav.Link>
                        <Nav.Link href="#promocao">Promoção</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
};


export default NavBar;