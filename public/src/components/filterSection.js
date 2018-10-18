import React from 'react';
import ActionCreator from '../actions/actionCreator';
import { FILTERS } from '../utils/enums';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FilterSection extends React.Component {

    render() {
        return (
            <div className="btn-group btn-group-sm todo-filter-group" role="group">
                <button type="button"
                className={this.getClassName(FILTERS.SHOW_ALL)}
                value={FILTERS.SHOW_ALL}
                onClick={this.applyFilter.bind(this)}>All</button>
                <button type="button"
                className={this.getClassName(FILTERS.ACTIVE)}
                value={FILTERS.ACTIVE}
                onClick={this.applyFilter.bind(this)}>Active</button>
                <button type="button"
                className={this.getClassName(FILTERS.COMPELTED)}
                value={FILTERS.COMPELTED}
                onClick={this.applyFilter.bind(this)}>Completed</button>
            </div>
        )
    }

    getClassName(filterName) {
        let classString = "btn btn-light btn-block todo-filters";
        if(this.props.filter === filterName) {
            classString += " active";
        }

        return classString;
    }

    applyFilter(event) {
        this.props.setFilter(event.target.value);
    }
}


const mapStateToProps = (state) => {
    return {
        filter: state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch) => ({
    setFilter: bindActionCreators(ActionCreator.setVisibilityFilter, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterSection);