import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


//TELAS
import Home from './screens/Home';
import Consulta from './screens/Consulta';
import Perfil from './screens/Perfil';
import Dev from './screens/Dev';

//IMAGENS
import logo from './images/logo.png';

import './Styles.css';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            {'Arquivei Lite'}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/consulta">Consulta</Nav.Link>
                            <Nav.Link href="/perfil">Perfil</Nav.Link>
                            <Nav.Link href="/dev">Dev</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/consulta' component={Consulta} />
                        <Route path='/perfil' component={Perfil} />
                        <Route path='/dev' component={Dev} />
                    </Switch>
                </div>

            </Router>
        );
    }
}

export default App;
