import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

//TELAS
import Home from './screens/Home';
import Consulta from './screens/Consulta';
import Perfil from './screens/Perfil';

//IMAGENS
import logo from './images/logo.png';

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
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/consulta">Consulta</Nav.Link>
                            <Nav.Link href="/perfil">Perfil</Nav.Link>
                        </Nav>
                    </Navbar>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/consulta' component={Consulta} />
                        <Route path='/perfil' component={Perfil} />
                    </Switch>
                </div>

            </Router>
        );
    }
}

export default App;
