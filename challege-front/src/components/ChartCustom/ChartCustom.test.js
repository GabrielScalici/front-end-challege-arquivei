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

    let data = [
        { name: 1, quantidade: 20 },
        { name: 2, quantidade: 30 },
        { name: 3, quantidade: 40 },
        { name: 4, quantidade: 50 },
        { name: 5, quantidade: 60 },
        { name: 6, quantidade: 80 },
        { name: 7, quantidade: 90 },
    ]

    beforeEach(() => {
        component = setUp(data={data});
    });

    it('render general component', () => {
        const wrapper = component.find('.Chart-Custom');
        expect(wrapper.length).toBe(1);
    });

    // describe('Checking PropTypes', () => {

    //     it('Verify type valor data ', () => {

    //         //PROP TYPE
    //         const propsErr = checkPropTypes(component.propTypes, data, 'props', ChartCustom.name);
    //         expect(propsErr).toBeUndefined();
    //     });


    // });


});