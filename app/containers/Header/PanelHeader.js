//Third Party
import React from 'react'
import { connect } from 'react-redux'

//Component
import PanelHeaderComponent from '../../components/Header/PanelHeader'

//Actions
import { TODOSearch } from '../../redux/actions/TODOSearch'
import { TODOFilter } from '../../redux/actions/TODOFilter'

class PanelHeaderContainer extends React.Component {

    render () {
        return <PanelHeaderComponent
                    search={this.props.search}
                    filter={this.props.filter}/>
    }

}

const mapStateToProps = (state, props) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {

        search: event => {
            dispatch(TODOSearch(event.target.value));
        },

        filter: tag => {
            dispatch(TODOFilter(tag));
        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelHeaderContainer)