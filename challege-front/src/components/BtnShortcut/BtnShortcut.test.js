import React from 'react';
import { shallow } from 'enzyme';
import ConnectedApp, { BtnShortcut } from './index';
import checkPropTypes from 'check-prop-types';


const setUp = (props = {}) => {
    const component = shallow(<BtnShortcut {...props} />);
    return component;
}

describe('Component show shortcut button render', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('render btn component', () => {
        const wrapper = component.find('.BtnShortcut');
        expect(wrapper.length).toBe(1);
    });

    describe('Checking PropTypes', () => {

        const simple_func = jest.fn();

        it('Verify props type string and function', () => {

            const expectedProps = {
                title: "Teste",
                onClick: simple_func,
            };

            //PROP TYPE
            const propsErr = checkPropTypes(BtnShortcut.propTypes, expectedProps, 'props', BtnShortcut.name);
            expect(propsErr).toBeUndefined();
        });


    });



});