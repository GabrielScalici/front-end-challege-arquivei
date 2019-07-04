import * as actions from './UserActions';

describe('Redux Actions for User infos', () => {

    describe('testing actions change name', () => {
        it('should create an action to change user name', () => {
            const text = 'Gabriel'
            const expectedAction = {
                type: 'MODIFICA_NAME_USER',
                payload: text
            }
            expect(actions.modificaNameUser(text)).toEqual(expectedAction);
        })
    })
    describe('testing actions change email', () => {
        it('should create an action to change user email', () => {
            const text = 'gabrielhc.scalici@gmail.com'
            const expectedAction = {
                type: 'MODIFICA_EMAIL_USER',
                payload: text
            }
            expect(actions.modificaEmailUser(text)).toEqual(expectedAction);
        })
    })
    describe('testing actions change name', () => {
        it('should create an action to change user cnpj', () => {
            const text = '65236882383823883233'
            const expectedAction = {
                type: 'MODIFICA_CNPJ_USER',
                payload: text
            }
            expect(actions.modificaCnpjUser(text)).toEqual(expectedAction);
        })
    })


});