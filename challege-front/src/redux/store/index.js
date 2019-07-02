import { createStore } from 'redux';
import reducers from '../reducers';

//CONFIGURACAO DO PERSIST
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };

// const store = createStore(reducers);

// export default store;