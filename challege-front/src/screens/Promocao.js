import React, {Component} from 'react';

//CSS
import '../Styles.css';

//COMPONENTES
import NavBar from '../components/NavBar';

class Promocao extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <p> Promocao </p>
            </div>
        );
    }
}

export default Promocao;
