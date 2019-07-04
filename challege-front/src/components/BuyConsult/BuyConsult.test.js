import React from 'react';
import { shallow } from 'enzyme';
import ConnectedApp, { BuyConsult } from './index';
import checkPropTypes from 'check-prop-types';

const setUp = (props = {}) => {
    const component = shallow(<BuyConsult {...props} />);
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

    describe('Checking PropTypes', () => {


        it('Verify numbers props type', () => {

            const expectedProps = {
                quant_compra: 5,
                num_consults: 100,
                disp_consults: 10,
                valor: '10'
            };

            //PROP TYPE
            const propsErr = checkPropTypes(BuyConsult.propTypes, expectedProps, 'props', BuyConsult.name);
            expect(propsErr).toBeUndefined();
        });


    });


});