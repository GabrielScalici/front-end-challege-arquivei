import React, { Component } from 'react';
import { Tabs, Tab, } from 'react-bootstrap';

//CSS
import '../Styles.css';

//COMPONENTES
import BannerIni from '../components/BannerIni';
import BuyContainer from '../components/BuyContainer';
import ConsultContainer from '../components/ConsultContainer';
import HistoryContainer from '../components/HistoryContainer';


class Consulta extends Component {
    render() {
        return (
            <div className="Container">
                <BannerIni title="Consulta" />

                <div>
                    <Tabs defaultActiveKey="consulta" id="uncontrolled-tab-example">
                        <Tab eventKey="consulta" title="Consultar">
                            <ConsultContainer />
                        </Tab>
                        <Tab eventKey="comprar" title="Comprar">
                            <BuyContainer />
                        </Tab>
                        <Tab eventKey="historico" title="Histórico">
                            <HistoryContainer />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Consulta;
