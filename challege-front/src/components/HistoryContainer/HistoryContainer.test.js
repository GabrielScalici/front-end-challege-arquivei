import React from 'react';
import { shallow } from 'enzyme';
import ConnectedApp, { HistoryContainer } from './index';

const setUp = (props={}) => {
    const component = shallow(<HistoryContainer {...props}/>);
    return component;
}

describe('Component show price render', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('render list component', () => {
        const wrapper = component.find('.List-Buy');
        expect(wrapper.length).toBe(1);
    });
});