import Dashboard, { INIT_STATE } from '../../reducers/Dashboard';

describe('Dashboard Reducer', () => {

    xit('Should return the initial state', () => {
        expect(Dashboard(undefined, {})).toMatchSnapshot();
    });

    it('Should handle FETCH_STATS_SUCCESS', () => {
        expect(
            Dashboard(INIT_STATE,
                {
                    type: 'FETCH_STATS_SUCCESS',
                }),
        ).toMatchSnapshot();
    });

});
