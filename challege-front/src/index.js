import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './screens/Home';
import Consulta from './screens/Consulta';
import App from './App';
import * as serviceWorker from './serviceWorker';

//REDUX
import { Provider } from 'react-redux';
import store from './redux/store';

//ROTAS
import { BrowserRouter, Route } from 'react-router-dom'

//BOOSTRAP PARA COMPONENTES PRONTOS
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
