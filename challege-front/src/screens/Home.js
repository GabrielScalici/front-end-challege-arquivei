import React, { Component } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';

//COMPONENTES
//import NavBar from '../components/NavBar';

//IMAGENS
import logo_completo from '../images/logo_completo.png'

//CSS
import '../Styles.css';

class Home extends Component {
    render() {
        return (
            <div className="Container">
                <div className="">
                    <Image className="margin-default" fluid src={logo_completo} />
                </div>

                <p className="Title"> HOME </p>
            </div>
        );
    }
}

export default Home;