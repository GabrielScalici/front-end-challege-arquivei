import React from 'react';
import { shallow } from 'enzyme';
import ConnectedApp, { HistoryList } from './index';
import checkPropTypes from 'check-prop-types';

const setUp = (props={}) => {
    const component = shallow(<HistoryList {...props}/>);
    return component;
}

describe('Component show infos and images render', () => {

    describe('Checking PropTypes', () => {
        

        it('Verify items type', () => {
            
            const expectedProps = {
                items: [{
                    VALOR: '10,00',
                    DATA: '21/12/2000',
                    QUANTIDADE: '200'
                }]
            };

            //PROP TYPE
            const propsErr = checkPropTypes(HistoryList.propTypes, expectedProps, 'props', HistoryList.name );
            expect(propsErr).toBeUndefined();
        });

        
    });

    
});