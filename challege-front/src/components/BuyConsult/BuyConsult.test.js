import React from 'react';
import { shallow } from 'enzyme';
import ConnectedApp, { BuyConsult } from './index';

const setUp = (props={}) => {
    const component = shallow(<BuyConsult {...props}/>);
    return component;
}

describe('Component show price render', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('render price component', () => {
        const wrapper = component.find('.Price-consult');
        expect(wrapper.length).toBe(1);
    });
});