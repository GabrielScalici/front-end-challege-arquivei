import React from 'react';
import { shallow } from 'enzyme';
import ConnectedApp, { BuyConsult } from './index';
import checkPropTypes from 'check-prop-types';
import { sale } from "../Sale";


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


    describe('promotions sale', () => {
        
        it('Verify correct logic without old purchase', () => {
            expect(sale(0, 2)).toBe(0.18);
            expect(sale(0, 1000)).toBe(90.00);
            expect(sale(0, 1024)).toBe(93.84);
            expect(sale(0, 2500)).toBe(370.00);
            expect(sale(0, 10000)).toBe(2170.00);
        });

        it('Verify correct logic with old purchase bigger than 1000', () => {
            expect(sale(1000, 2)).toBe(0.32);
            expect(sale(1000, 1000)).toBe(160.00);
            expect(sale(1000, 1200)).toBe(208.00);
        });
        
        it('Verify correct logic with old purchase bigger than 2000', () => {
            expect(sale(2000, 2)).toBe(0.48);
            expect(sale(2000, 1000)).toBe(240.00);
            expect(sale(2000, 1200)).toBe(288.00);
            expect(sale(2000, 2000)).toBe(480.00);
        });
    
    });


});