import React, {Component} from 'react';

//COMPONENTES
import NavBar from '../components/NavBar';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <p> HOME </p>
            </div>
        );
    }
}

export default Home;
