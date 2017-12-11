//Third Party
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//Component
import PanelHeaderComponent from '../../components/Header/PanelHeader'

//Actions
import { TODOSearch } from '../../redux/actions/TODOSearch'
import { TODOFilter } from '../../redux/actions/TODOFilter'

class PanelHeaderContainer extends React.Component {

    render () {
        return (
          <PanelHeaderComponent filter={this.props.filter} search={this.props.search}/>
        );
    }

}

PanelHeaderContainer.propTypes = {
    search: PropTypes.string,
    filter: PropTypes.array
}

const mapStateToProps = (state, props) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {

        search: (event) => {
            dispatch(TODOSearch(event.target.value));
        },

        filter: (tag) => {
            dispatch(TODOFilter(tag));
        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelHeaderContainer)