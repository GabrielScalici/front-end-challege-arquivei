import React from 'react';
import { shallow } from 'enzyme';
import ConnectedApp, { CountConsult } from './index';
import checkPropTypes from 'check-prop-types';


const setUp = (props = {}) => {
    const component = shallow(<CountConsult {...props} />);
    return component;
}

describe('Component show counter render', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('render price component', () => {
        const wrapper = component.find('.Counter');
        expect(wrapper.length).toBe(1);
    });

    describe('Checking PropTypes', () => {

        it('Verify props type string and numbers', () => {

            const expectedProps = {
                title: "Teste",
                count: 20,
            };

            //PROP TYPE
            const propsErr = checkPropTypes(CountConsult.propTypes, expectedProps, 'props', CountConsult.name);
            expect(propsErr).toBeUndefined();
        });


    });



});