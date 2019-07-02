import React, {Component} from 'react';

//CSS
import '../Styles.css';

//COMPONENTES
import BannerIni from '../components/BannerIni';

class Perfil extends Component {
    render() {
        return (
            <div className="Container">
                <BannerIni title="Perfil" />
            </div>
        );
    }
}

export default Perfil;
