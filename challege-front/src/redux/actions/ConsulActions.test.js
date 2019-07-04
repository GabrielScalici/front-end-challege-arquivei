import * as actions from './ConsultActions';

describe('Redux Actions for Consults infos', () => {

    describe('testing actions change valid consults', () => {
        it('should create an action to change valid consults', () => {
            const text = 100;
            const expectedAction = {
                type: 'MODIFICA_DISP_CONSULTS',
                payload: text
            }
            expect(actions.modificaDispConsult(text)).toEqual(expectedAction);
        })
    })

    describe('testing actions change all consults', () => {
        it('should create an action to change all consults', () => {
            const text = 100;
            const expectedAction = {
                type: 'MODIFICA_NUM_CONSULTS',
                payload: text
            }
            expect(actions.modificaNumConsult(text)).toEqual(expectedAction);
        })
    })


});