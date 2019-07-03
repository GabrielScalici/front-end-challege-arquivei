import React from 'react';
import { shallow } from 'enzyme';
import './setup';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import BuyConsult from '../components/BuyConsult';


const mockStore = configureMockStore();
const store = mockStore({});

describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {

        shallow(
            <Provider store={store}>
                <BuyConsult />
            </Provider>
        )

    });
});