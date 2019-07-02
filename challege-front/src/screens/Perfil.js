import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';

//FIREBASE
import { db } from '../utils/firebase';

//CSS
import '../Styles.css';

//COMPONENTES
import BannerIni from '../components/BannerIni';
import FormPerfil from '../components/FormPerfil';
import FormCard from '../components/FormCard';
import DividerLine from '../components/DividerLine';
import UserRegister from '../components/UserRegister';
import CardRegister from '../components/CardRegister';

class Perfil extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [],
            key_user: [],
            card: [],
            key_card: [],
        }

    }


    componentDidMount() {

        //BUSCANDO USUÁRIO VÁLICO
        db.ref('USER').on('value', snapshot => {
            let data = snapshot.val();
            let item = Object.values(data);
            this.setState({ user: item[0] });
            console.log(this.state.user);
        });

        //BUSCANDO USUÁRIO VÁLICO
        db.ref('CARD').on('value', snapshot => {
            let data = snapshot.val();
            let item = Object.values(data);
            var key = Object.keys(data);
            this.setState({ card: item });
            console.log(key);
        })

    }

    render() {
        return (
            <Container className="Container">
                <BannerIni title="Perfil" />

                <div>
                    <Tabs defaultActiveKey="perfil" id="uncontrolled-tab-example">
                        <Tab eventKey="perfil" title="Perfil">
                            <div class="ui segment">
                                <DividerLine icon="user" title="Usuário Cadastrado" />
                                <UserRegister />
                            </div>
                            <DividerLine simple />
                            <FormPerfil />
                        </Tab>
                        <Tab eventKey="card" title="Cartões">
                            <div class="ui segment">
                                <DividerLine icon="user" title="Cartão Cadastrado" />
                                <CardRegister />
                            </div>
                            <FormCard />

                        </Tab>
                    </Tabs>
                </div>
            </Container>
        );
    }
}

export default Perfil;
