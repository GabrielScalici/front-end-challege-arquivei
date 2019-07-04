import React from 'react';
import { shallow } from 'enzyme';
import ConnectedApp, { PriceConsults } from './index';
import checkPropTypes from 'check-prop-types';

const setUp = (props = {}) => {
    const component = shallow(<PriceConsults {...props} />);
    return component;
}

describe('Component show price render', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('render general component', () => {
        const wrapper = component.find('.Container-Price');
        expect(wrapper.length).toBe(1);
    });

    describe('Checking PropTypes', () => {


        it('Verify type valor var ', () => {

            const expectedProps = {
                valor: '20'
            };

            //PROP TYPE
            const propsErr = checkPropTypes(PriceConsults.propTypes, expectedProps, 'props', PriceConsults.name);
            expect(propsErr).toBeUndefined();
        });


    });


});