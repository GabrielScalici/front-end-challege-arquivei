import React from 'react';
import { shallow } from 'enzyme';
import ConnectedApp, { CardUser } from './index';

const setUp = (props={}) => {
    const component = shallow(<CardUser {...props}/>);
    return component;
}

describe('Component show price render', () => {

    describe('Have Props', () => {
        
        let wrapper;
        beforeEach(() => {
            const props = {
                num_card: '1234123412341234',
                name_card: 'GABRIEL SCALICI',
                valid_card: '1021',
                cvv_card: '123'
            };
            wrapper = setUp(props);
        });

        //CARD
        it('render credit card', () => {
            const component = wrapper.find('.CardUser');
            expect(component.length).toBe(1);
        });
    });

    
});