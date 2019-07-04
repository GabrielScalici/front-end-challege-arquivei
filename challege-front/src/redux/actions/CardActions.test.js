import * as actions from './CardActions';

describe('Redux Actions for Credit Card', () => {

    describe('testing actions change name', () => {
        it('should create an action change name in credit card', () => {
            const text = 'GABRIEL SCALICI'
            const expectedAction = {
                type: 'MODIFICA_NAME_CARD',
                payload: text
            }
            expect(actions.modificaNameCard(text)).toEqual(expectedAction);
        })
    })
    describe('testing actions change number', () => {
        it('should create an action change number in credit card', () => {
            const text = '1234123412341234'
            const expectedAction = {
                type: 'MODIFICA_NUM_CARD',
                payload: text
            }
            expect(actions.modificaNumCard(text)).toEqual(expectedAction);
        })
    })
    describe('testing actions change expire', () => {
        it('should create an action change date in credit card', () => {
            const text = '1221'
            const expectedAction = {
                type: 'MODIFICA_VALID_CARD',
                payload: text
            }
            expect(actions.modificaValidCard(text)).toEqual(expectedAction);
        })
    })
    describe('testing actions change cvv', () => {
        it('should create an action change cvv number in credit card', () => {
            const text = '123'
            const expectedAction = {
                type: 'MODIFICA_CVV_CARD',
                payload: text
            }
            expect(actions.modificaCvvCard(text)).toEqual(expectedAction);
        })
    })


});