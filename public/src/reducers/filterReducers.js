import { FILTERS } from '../utils/enums';

const visibilityFilter = (state = FILTERS.SHOW_ALL, action) => {
    if(action.type === "visibilityFilter") {
        return action.filter
    } else {
        return state;
    }
}

export default visibilityFilter;