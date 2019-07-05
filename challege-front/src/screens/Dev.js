import React, { Component } from 'react';
import { Image, Container } from 'react-bootstrap';

//COMPONENTES
import ResetStates from '../components/ResetStates';
import BannerIni from '../components/BannerIni';
import DevContainer from '../components/DevContainer';

//CSS
import '../Styles.css';

class Dev extends Component {
    render() {
        return (
            <div className="Container">
                <BannerIni title="Auxiliar Dev" />
                <Container>
                    <DevContainer />
                </Container>
                <div className="Background-Error">
                    <Container>
                        <ResetStates />
                    </Container>
                </div>
            </div>
        );
    }
}

export default Dev;
