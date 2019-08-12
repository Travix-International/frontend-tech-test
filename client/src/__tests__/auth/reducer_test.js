import Auth, { INIT_STATE } from '../../reducers/Auth';

describe('Auth Reducer', () => {

    xit('Should return the initial state', () => {
        expect(Auth(undefined, {})).toMatchSnapshot();
    });

    it('Should handle SIGNIN_USER_SUCCESS', () => {
        expect(
            Auth(INIT_STATE,
                {
                    type: 'SIGNIN_USER_SUCCESS',
                }),
        ).toMatchSnapshot();
    });


    it('Should handle SIGNIN_GOOGLE_USER_SUCCESS', () => {
        expect(
            Auth(INIT_STATE,
                {
                    type: 'SIGNIN_GOOGLE_USER_SUCCESS',
                }),
        ).toMatchSnapshot();
    });


    it('Should handle INIT_URL', () => {
        expect(
            Auth(INIT_STATE,
                {
                    type: 'INIT_URL',
                }),
        ).toMatchSnapshot();
    });

});
