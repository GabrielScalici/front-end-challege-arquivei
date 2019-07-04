import React, { Component } from 'react';
import { Image, Container } from 'react-bootstrap';

//COMPONENTES
import ResetStates from '../components/ResetStates';

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
                <div className="Background-Error">
                    <Container>
                        <ResetStates />
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;
