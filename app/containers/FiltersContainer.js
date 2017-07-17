/**
 * Created by NarsFam on 08.07.2017.
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import FilterLinkItem from '../components/FilterLinkItem'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

const FiltersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLinkItem);

export default FiltersContainer;