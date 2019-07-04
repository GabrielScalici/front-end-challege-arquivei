import React from 'react';
import { shallow } from 'enzyme';
import ConnectedApp, { UserRegister } from './index';

const setUp = (props={}) => {
    const component = shallow(<UserRegister {...props}/>);
    return component;
}

describe('Component show price render', () => {

    let component;

    describe('Have Props', () => {
        
        let wrapper;
        beforeEach(() => {
            const props = {
                name_user: 'Gabriel Scalici',
                email_user: 'gabriel-manu@hotmai.com',
                cnpj_user: '8792367123712313'
            };
            wrapper = setUp(props);
        });


        //COMPONENTS
        it('render register user', () => {
            const component = wrapper.find('.UserRegister');
            expect(component.length).toBe(1);
        });

        it('render register user', () => {
            const component = wrapper.find('.UserNotRegister');
            expect(component.length).toBe(0);
        });

        //IMAGES
        it('render image for register user', () => {
            const component = wrapper.find('.ImageReg');
            expect(component.length).toBe(1);
        });
        
        it('not render image for unregister user', () => {
            const component = wrapper.find('.ImageNotReg');
            expect(component.length).toBe(0);
        });

        
    });
    
    describe('Have No Props', () => {
        
        let wrapper;
        beforeEach(() => {
            const props = {
                name_user: '',
                email_user: '',
                cnpj_user: ''
            };
            wrapper = setUp(props);
        });

        //COMPONENTS
        it('render unregistered user ', () => {
            const component = wrapper.find('.UserRegister');
            expect(component.length).toBe(0);
        });
        it('render unregistered user ', () => {
            const component = wrapper.find('.UserNotRegister');
            expect(component.length).toBe(1);
        });

        //IMAGES
        it('render image for register user', () => {
            const component = wrapper.find('.ImageReg');
            expect(component.length).toBe(0);
        });
        
        it('not render image for unregister user', () => {
            const component = wrapper.find('.ImageNotReg');
            expect(component.length).toBe(1);
        });
    });

    
});