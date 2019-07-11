import React from 'react';
import { shallow } from 'enzyme';
import ConnectedApp, { BtnShortcut } from './index';
import checkPropTypes from 'check-prop-types';
import renderer from 'react-test-renderer';


const setUp = (props = {}) => {
    const component = shallow(<BtnShortcut {...props} />);
    return component;
}

describe('Component show shortcut button render', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    describe('render with show = false', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                price: '20,00'
            };
            wrapper = setUp(props);
        });

        //COMPONENTS
        it('render only button', () => {
            const component = wrapper.find('.BtnShortcut');
            expect(component.length).toBe(1);
        });

        it('render price', () => {
            const component = wrapper.find('.BtnShortcutPrice');
            expect(component.length).toBe(0);
        });

        it('render with mouse event', () => {
            const tree = renderer.create(<BtnShortcut/>).toJSON();

            expect(tree).toMatchSnapshot();
        });


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