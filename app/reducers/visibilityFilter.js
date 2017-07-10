/**
 * Created by NarsFam on 08.07.2017.
 */
import * as types from '../actions/types';
import visibilities from '../consts/visibilityTypes'

const visibilityFilter = (state = visibilities.ALL, action) => {
    switch (action.type) {
        case types.FILTERS.FILTER_BY:
            return action.filter;
        default:
            return state;
    }

};

export default visibilityFilter;