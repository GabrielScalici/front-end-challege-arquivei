import React from 'react';
import { shallow } from 'enzyme';
import  ChartCustom from './index';
import checkPropTypes from 'check-prop-types';

const setUp = (props = {}) => {
    const component = shallow(<ChartCustom {...props} />);
    return component;
}

describe('Component show price render', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('render general component', () => {
        const wrapper = component.find('.Chart-Custom');
        expect(wrapper.length).toBe(1);
    });

    describe('Checking PropTypes', () => {

        it('Verify type valor data ', () => {

            const expectedProps = {
                data: '[{quantidade, valor}, {quantidade, valor}]'
            };

            //PROP TYPE
            const propsErr = checkPropTypes(ChartCustom.propTypes, expectedProps, 'props', ChartCustom.name);
            expect(propsErr).toBeUndefined();
        });


    });


});