import React, { Component } from 'react';
import { Tabs, Tab, } from 'react-bootstrap';

//CSS
import '../Styles.css';

//COMPONENTES
import BannerIni from '../components/BannerIni';



class Consulta extends Component {
    render() {
        return (
            <div className="Container">
                <BannerIni title="Consulta"/>
                
                <div>
                    <Tabs defaultActiveKey="consulta" id="uncontrolled-tab-example">
                        <Tab eventKey="consulta" title="Consultar">
                            <p> prmeiro </p>
                        </Tab>
                        <Tab eventKey="comprar" title="Comprar">
                            <p> segundo </p>
                        </Tab>
                        <Tab eventKey="historico" title="Histórico">
                            <p> terceiro </p>
                        </Tab>
                    </Tabs>
                </div>
                <p> CONSULTA </p>
            </div>
        );
    }
}

export default Consulta;
