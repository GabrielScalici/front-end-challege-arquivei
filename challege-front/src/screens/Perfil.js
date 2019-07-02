import React, {Component} from 'react';

//CSS
import '../Styles.css';

//COMPONENTES
import BannerIni from '../components/BannerIni';
import FormPerfil from '../components/FormPerfil';
import FormCard from '../components/FormCard';

class Perfil extends Component {
    render() {
        return (
            <div className="Container">
                <BannerIni title="Perfil" />
                <FormPerfil/>
                <div className="ui divider"></div>
                <FormCard />

            </div>
        );
    }
}

export default Perfil;
