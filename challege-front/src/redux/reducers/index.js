import {combineReducers} from 'redux';

//IMPORTACAO DOS REDUCERS
import UserReducer from './UserReducer';
import CardReducer from './CardReducer';
import ConsultReducer from './ConsultReducer';
import AlertReducer from './AlertReducer';

export default combineReducers({
    UserReducer: UserReducer,
    ConsultReducer: ConsultReducer,
    CardReducer: CardReducer,
    AlertReducer: AlertReducer,
});